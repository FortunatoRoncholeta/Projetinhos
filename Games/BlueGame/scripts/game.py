import random
import pygame
from scripts.animatedbg import AnimatedBg
from scripts.obj import Obj
from scripts.scene import Scene
from scripts.settings import *
from scripts.text import Text
from scripts.Player import Player
from scripts.camera import Camera
from scripts.fade import Fade

class Game(Scene):

    def __init__(self):
        super().__init__()
        self.colision_sprites = pygame.sprite.Group()

        self.stage = 0
        self.maps = [MAP0, MAP1, MAP2]
        self.current_level = Level(self.maps[self.stage])
        self.active = True


    def events(self, event):
        pass

    def draw(self):
        self.current_level.draw()

    def update(self):
        if self.current_level.active == False and self.current_level.gameover == False:
            self.stage +=1
            if len(self.maps) == self.stage:
                self.active = False
            else:
                self.current_level = Level(self.maps[self.stage])
        elif self.current_level.active == True and self.current_level.gameover == True:
            self.active = False
        self.current_level.update()





class Ui:
    def __init__(self):
        self.display = pygame.display.get_surface()
        self.ui_group = pygame.sprite.Group()

        self.hud1 = Obj("assets/player/idle_0.png",
                        [0,10], [self.ui_group])
        self.hud2 = Obj("assets/player/idle_0.png",
                        [74, 10], [self.ui_group])
        self.hud3 = Obj("assets/player/idle_0.png",
                        [144, 10], [self.ui_group])

        self.lifes = 3

    def count_lifes(self):
        if self.lifes ==2:
            self.hud3.kill()
        elif self.lifes == 1:
            self.hud2.kill()
        elif self.lifes == 0:
            self.hud1.kill()

    def draw(self):
        self.ui_group.draw(self.display)

    def update(self):
        self.count_lifes()

class Level:
    def __init__(self, worldmap):
        self.display = pygame.display.get_surface()
        self.all_sprites = Camera()
        self.colision_sprites = pygame.sprite.Group()

        self.active = True
        self.gameover = False
        self.fade = Fade(5)
        self.finish = Obj("assets/title/finish.png",
                          [0,0], [self.all_sprites])
        self.player = Player([100, 128],
                             [self.all_sprites],
                             self.colision_sprites)
        self.worldmap = worldmap
        self.generate_map()
        self.hud_ui = Ui()

    def events(self, event):
        pass

    def next_stage(self):
        if self.player.rect.colliderect(self.finish.rect):
            self.active = False

    def reset_position(self):
        if self.player.rect.y > HEIGHT:
            self.player.rect.x = 0
            self.player.rect.y = 0

            self.hud_ui.lifes -= 1
        if self.hud_ui.lifes <=0:
            self.gameover= True



    def draw(self):
        self.all_sprites.costum_draw(self.player)
        self.hud_ui.draw()
        self.fade.draw()

    def generate_map(self):
        for row_index, row in enumerate(self.worldmap):
            for col_index, col in enumerate(row):
                x = col_index * TILE_SIZE
                y = row_index * TILE_SIZE

                if col == 'X':
                    Obj("assets/title/tile.png",
                        [x, y], [self.all_sprites,
                                 self.colision_sprites])
                elif col == 'C':
                    self.finish.rect.x = x
                    self.finish.rect.y = y
                elif col == 'P':
                    self.player.rect.x = x
                    self.player.rect.y = y

    def colision(self):
        pass

    def gameover(self):
        pass

    def update(self):
        self.all_sprites.update()
        self.next_stage()
        self.reset_position()
        self.hud_ui.update()
