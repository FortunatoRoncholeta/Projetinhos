import pygame
from scripts.settings import *
from scripts.scene import Scene
from scripts.menu import Menu
from scripts.gameOver import GameOver
from scripts.game import Game


class StartGame:
    def __init__(self):
        #padrão iniciar font, som e video
        pygame.init()
        pygame.mixer.init()
        pygame.font.init()
        pygame.display.set_caption("Navinha")

        self.display = pygame.display.set_mode([WIDTH, HEIGHT])
        self.current_scene = Scene()
        self.scene = "menu"
        self.current_scene = Menu()

        #parte 1 - FPS
        self.fps = pygame.time.Clock()

        #Velocidade da nave
        self.speed_ship = 20

    def run(self):
        while True:

            if self.scene == "menu" and self.current_scene.active == False:
                self.scene = "game"
                self.current_scene = Game()
            elif self.scene == "game" and self.current_scene.active == False:
                self.scene = "gameover"
                self.current_scene = GameOver()
            elif self.scene == "gameover" and self.current_scene.active == False:
                self.scene = "menu"
                self.current_scene = Menu()

            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    pygame.quit()

                if event.type == pygame.KEYDOWN:
                    if self.scene == "game":
                        if event.key == pygame.K_DOWN:
                            self.current_scene.navinha.pra_baixo(self.speed_ship)
                        elif event.key == pygame.K_UP:
                            self.current_scene.navinha.pra_cima(self.speed_ship)
                        elif event.key == pygame.K_LEFT:
                            self.current_scene.navinha.pra_esquerda(self.speed_ship)
                        elif event.key == pygame.K_RIGHT:
                            self.current_scene.navinha.pra_direita(self.speed_ship)

                self.current_scene.events(event)

            self.display.fill("black")
            self.current_scene.draw()
            self.current_scene.update()

            # atualizano a tela
            self.fps.tick(60)

            pygame.display.flip()





