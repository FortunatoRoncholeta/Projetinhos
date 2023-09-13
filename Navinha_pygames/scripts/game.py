import pygame.key

from scripts.obj import Obj
from scripts.scene import Scene
from scripts.animatedBg import AnimatedBg
from scripts.settings import *
import random

from scripts.text import Text


class Game(Scene):
    def __init__(self):
        super().__init__()

        #depois iremos remover:
        self.bg = AnimatedBg("assets/menu/bg.png", [0, 0], [0, -720], [self.all_sprites])

        self.navinha = Navinha("assets/nave/nave0.png", [800, 600], [self.all_sprites])

        self.tick=0

        self.colisao_inimigo = pygame.sprite.Group()
        self.powerups = pygame.sprite.Group()

        self.pontos =0

        self.score_text = Text("assets/fonts/airstrike.ttf",25,"Score: ", "White",[30,30])

        self.score_pontos = Text("assets/fonts/airstrike.ttf", 25, "0", "White",[130, 30])

        self.life1 = Obj("assets/hud/nave.png",[30,60], [self.all_sprites])
        self.life2 = Obj("assets/hud/nave.png", [70, 60], [self.all_sprites])
        self.life3 = Obj("assets/hud/nave.png", [110, 60], [self.all_sprites])

        self.music =pygame.mixer.Sound("assets/sounds/bg.ogg")
        self.music.play(-1)

    def update(self):
        self.bg.update()
        self.navinha.update()
        self.navinha.shots.draw(self.display)
        self.navinha.shots.update()
        self.spaw_Inimigo()
        self.colisao()
        self.score_text.draw()
        self.score_pontos.draw()
        self.gameover()
        self.hud()

        return super().update()


    def hud(self):

        if self.navinha.life ==2:
            self.life3.kill()

        elif self.navinha.life ==1:
            self.life2.kill()

        elif self.navinha.life ==0:
            self.life1.kill()

    #Controla todas as colisoes do jogo
    def colisao(self):
        for shot in self.navinha.shots:
            for inimigo in self.colisao_inimigo:
                if shot.rect.colliderect(inimigo.rect):
                    shot.kill()
                    inimigo.life-=1
                    self.pontos +=1
                    self.score_pontos.update_text(str(self.pontos))
                    sound = pygame.mixer.Sound("assets/sounds/block.ogg")
                    sound.play()

                    if inimigo.life <=0:
                        x=inimigo.rect.x + inimigo.image.get_width()/2
                        y = inimigo.rect.y + inimigo.image.get_height() / 2
                        Explosion("assets/explosion/0.png",[x,y],[self.all_sprites])

        for inimigo in self.colisao_inimigo:
            if self.navinha.rect.colliderect((inimigo.rect)):
                inimigo.kill()
                self.navinha.life -=1
                self.navinha.level =1

        for powerup in self.powerups:
            if self.navinha.rect.colliderect(powerup.rect):
                powerup.kill()
                self.navinha.level += 1


    def gameover(self):
        if self.navinha.life <=0:
            self.active = False


    def spaw_Inimigo(self):
        self.tick +=1
        if self.tick == 60:
            # cria um temporizador para criação dos inimigos

            Inimigo_grande("assets/nave/enemy3_0.png",[random.randint(100,1189),-100],[self.all_sprites,self.colisao_inimigo])

        if self.tick == 180:
            # cria um temporizador para criação dos inimigos

            Inimigo_medio("assets/nave/enemy2_0.png", [random.randint(100, 1189), -100],[self.all_sprites, self.colisao_inimigo])
            Inimigo_medio("assets/nave/enemy2_0.png", [random.randint(100, 1189), -100],[self.all_sprites, self.colisao_inimigo])

        elif self.tick == 270:
            Inimigo_pequeno("assets/nave/enemy0.png", [random.randint(100, 1189), -100],[self.all_sprites, self.colisao_inimigo])
            Inimigo_pequeno("assets/nave/enemy0.png", [random.randint(100, 1189), -100],[self.all_sprites, self.colisao_inimigo])
            Inimigo_pequeno("assets/nave/enemy0.png", [random.randint(100, 1189), -100], [self.all_sprites, self.colisao_inimigo])
            Inimigo_pequeno("assets/nave/enemy0.png", [random.randint(100, 1189), -100],[self.all_sprites, self.colisao_inimigo])
            PowerUp("assets/nave/powerup0.png", [random.randint(100, 1189), -100],[self.all_sprites, self.powerups])
            self.tick = 0


class Explosion(Obj):
    def __init__(self,img,pos,*groups):
        super().__init__(img,pos,*groups)
        self.ticks=0

    def update(self):
        self.animation(5, 5,"assets/explosion/")
        self.ticks += 1
        if self.ticks > 25:
            self.kill()
            self.ticks = 0
        return super().update()

class Navinha(Obj):
    def __init__(self, img, pos, *groups):
        super().__init__(img, pos, *groups)
        self.direction = pygame.math.Vector2()
        self.speed = 5
        self.shots = pygame.sprite.Group()
        self.ticks =0
        self.life = 3
        self.level =1

    def input(self):

        #também serve para verificar se a tecla está
        #pressionada só que fica em loop enquanto tiver
        #apertada
        key = pygame.key.get_pressed()

        if key[pygame.K_w]:
            self.direction.y = -1
        elif key[pygame.K_s]:
            self.direction.y = 1
        else:
            self.direction.y = 0

        if key[pygame.K_a]:
            self.direction.x = -1
        elif key[pygame.K_d]:
            self.direction.x = 1
        else:
            self.direction.x = 0

        if key[pygame.K_SPACE]:

            self.ticks +=1

            if self.ticks >10:
                self.ticks = 0
                sound = pygame.mixer.Sound("assets/sounds/shot.ogg")
                sound.play()
                if self.level == 1:
                    Shot("assets/tiros/tiro1.png", [self.rect.x + 30, self.rect.y - 20],[self.shots])

                elif self.level == 2:
                    Shot("assets/tiros/tiro2.png", [self.rect.x + 30, self.rect.y - 20],[self.shots])

                elif self.level == 3:
                    Shot("assets/tiros/tiro3.png", [self.rect.x + 30, self.rect.y - 20],[self.shots])

                else:
                    Shot("assets/tiros/tiro1.png", [self.rect.x, self.rect.y - 20],[self.shots])
                    Shot("assets/tiros/tiro1.png", [self.rect.x + 60, self.rect.y - 20], [self.shots])



    def move(self):
        self.rect.center += self.direction * self.speed

    def limit(self):
        if self.rect.x < 0:
            self.rect.x = 0
        elif self.rect.x > WIDTH - self.image.get_width():
            self.rect.x = WIDTH - self.image.get_width()

        if self.rect.y < 0:
            self.rect.y = 0
        elif self.rect.y > HEIGHT - self.image.get_height():
            self.rect.y = HEIGHT - self.image.get_height()


    def update(self):
        self.animation(8, 3, "assets/nave/nave")

        self.input()
        self.move()
        self.limit()

class Shot(Obj):
    def __init__(self, img, pos, *groups):
        super().__init__(img, pos, *groups)
        self.speed = 5

    def update(self):
        self.rect.y -= self.speed

        if self.rect.y < -100:
            self.kill()

    def pra_cima(self, vel):
        self.rect.y -= vel

    def pra_baixo(self, vel):
        self.rect.y += vel

    def pra_esquerda(self, vel):
        self.rect.x -= vel

    def pra_direita(self, vel):
        self.rect.x += vel




class Inimigo(Obj):
    def __init__(self,img,pos,*groups):
        super().__init__(img,pos,*groups)
        self.speed = 6
        self.life = 3

    def destruction(self):
        if self.life <=0:
            self.kill()

    def limites(self):
        if self.rect.y > HEIGHT + self.image.get_height():
            self.kill()

    def move(self):
        self.rect.y += self.speed

    def update(self):
        self.move()
        self.destruction()
        self.limites()

class Inimigo_pequeno(Inimigo):
    def __init__(self,img,pos,*groups):
        super().__init__(img,pos,*groups)
        self.speed = 6
        self.life  = 1

    def update(self):
        self.animation(8,3,"assets/nave/enemy")
        return super().update()


class Inimigo_medio(Inimigo):
    def __init__(self, img, pos, *groups):
        super().__init__(img, pos, *groups)
        self.speed = 4
        self.life = 2

    def update(self):
        self.animation(8, 3, "assets/nave/enemy2_")
        return  super().update()

class Inimigo_grande(Inimigo):
    def __init__(self, img, pos, *groups):
        super().__init__(img, pos, *groups)
        self.speed = 1
        self.life = 10

    def update(self):
        self.animation(8, 3, "assets/nave/enemy3_")
        return  super().update()


class PowerUp(Inimigo):
    def __init__(self, img, pos, *groups):
        super().__init__(img, pos, *groups)
        self.speed = 2


    def update(self):
        self.animation(8, 3, "assets/nave/powerup")
        return  super().update()