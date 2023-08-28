import pygame
from scripts.config import *
from scripts.scene import Scene
from scripts.game import Game
from scripts.gameover import GameOver
from scripts.menu import Menu


class StartGame:

    def __init__(self):

        # inicia todo o ambiente do pygame
        pygame.init()
        pygame.mixer.init()
        pygame.font.init()

        # define o tamanho da tela
        self.all_sprites = pygame.sprite.Group()
        self.display = pygame.display.set_mode([WIDTH, HEIGHT])

        # titulo
        pygame.display.set_caption("joguinho de futebol")

        self.scene = "Menu"
        self.current_scene = Menu()
# configuraçoes
        self.player1_velocidade = 15
        self.player1_score = 0

        self.player2_score = 0

        self.ball_dir_x = 6
        self.ball_dir_y = 6

        # Objetos do jogo
        self.campo = Obj("assets/bg.png", [self.all_sprites])
        # campo_img = self.campo.img
        # campo = self.campo.rect

        self.player1 = Obj("assets/player1.png", [self.all_sprites])
        # player1_img = self.player1.img
        # player1 = self.player1.rect

        self.player2 = Obj("assets/player2.png",
                           [self.all_sprites], right=1280)
        # player2_img = self.player2.img
        # player2 = self.player2.rect

        self.ball = Obj("assets/ball.png",
                        [self.all_sprites], center=[1280/2, 720/2])
        # ball_img = self.ball.img
        # ball = self.ball.rect

        

        self.music = pygame.mixer.Sound("assets/music.ogg")
        self.music.play(-1)

        self.fps = pygame.time.Clock()

    def run(self):
        while True:
            if self.scene == "game":
                self.current_scene = Game()

                # parte 2 - eventos
                for event in pygame.event.get():
                    # evento do X de fechar
                    if event.type == pygame.QUIT:
                        pygame.quit()

                    if event.type == pygame.KEYDOWN:
                        if event.key == pygame.K_s:
                            self.player1_velocidade = 15
                        if event.key == pygame.K_w:
                            self.player1_velocidade = -15

                    self.current_scene.events(event)

                if self.player2_score >= 3:
                    self.scene = "gameover"
                    self.fade_alpha = 255

                if self.player1_score >= 3:
                    self.scene = "gameover"
                    self.fade_alpha = 255

                # parte 6 - colisão e mov bola
                if self.ball.rect.colliderect(self.player1.rect) or self.ball.rect.colliderect(self.player2.rect):
                    self.ball_dir_x *= -1
                    hit = pygame.mixer.Sound("assets/pong.wav")
                    hit.play()

                if self.player1.rect.y <= 0:
                    self.player1.rect.y = 0
                elif self.player1.rect.y >= 720 - 150:
                    self.player1.rect.y = 720 - 150

                self.player1.rect.y += self.player1_velocidade

                if self.ball.rect.x <= 0:
                    self.player2_score += 1
                    self.placar_player2 = self.font.render(
                        str(self.player2_score), True, "white")
                    self.ball.rect.x = 600
                    self.ball_dir_x *= -1
                elif self.ball.rect.x >= 1280:
                    self.player1_score += 1
                    self.placar_player1 = self.font.render(
                        str(self.player1_score), True, "white")
                    self.ball.rect.x = 600
                    self.ball_dir_x *= -1

                if self.ball.rect.y <= 0:
                    self.ball_dir_y *= -1
                elif self.ball.rect.y >= 720 - 15:
                    self.ball_dir_y *= -1

                self.ball.rect.x += self.ball_dir_x
                self.ball.rect.y += self.ball_dir_y

                self.player2.rect.y = self.ball.rect.y - 75

                # fica preenchendo a tela
                self.display.fill((0, 0, 0))

                self.display.blit(self.campo.image, self.campo.rect)
                self.display.blit(self.player1.image, self.player1.rect)
                self.display.blit(self.player2.image, self.player2.rect)
                self.display.blit(self.ball.image, self.ball.rect)

                self.display.blit(self.placar_player1, (500, 50))
                self.display.blit(self.placar_player2, (780, 50))
            elif self.scene == "gameover":
                self.current_scene = GameOver()
                for event in pygame.event.get():
                    if event.type == pygame.QUIT:
                        pygame.quit()
                    if event.type == pygame.KEYDOWN:
                        if event.key == pygame.K_RETURN:
                            self.player2_score = 0
                            self.player1_score = 0
                            self.placar_player1 = self.font.render(
                                str(self.player1_score), True, "white")
                            self.placar_player2 = self.font.render(
                                str(self.player2_score), True, "white")
                            self.ball.rect.x = 640
                            self.ball.rect.y = 320
                            self.player1.rect.y = 0
                            self.player2.rect.y = 0
                            self.scene = "menu"
                        elif event.key == pygame.K_q:
                            pygame.quit()

                    self.current_scene.events(event)

                if self.fade_alpha > 0:
                    self.fade_alpha -= 10
                    self.fade_img.set_alpha(self.fade_alpha)

                self.display.fill((0, 0, 0))
                self.display.blit(self.current_scene.bg.image,
                                  self.current_scene.bg.rect)
                self.display.blit(self.fade_img, self.fade)
          
                    self.current_scene.events(event)

                if self.fade_alpha > 0:
                    self.fade_alpha -= 10
                    self.fade_img.set_alpha(self.fade_alpha)
                self.display.fill((0, 0, 0))
                text_win = self.font.render("Aperte Enter", True, "white")
                self.display.blit(self.current_scene.bg.image,
                                  self.current_scene.bg.rect)
                self.display.blit(self.fade_img, self.fade)

            # atualizano a tela
            self.fps.tick(60)
            pygame.display.flip()
