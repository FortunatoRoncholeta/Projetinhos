import pygame

from scripts.obj import Obj
from scripts.scene import Scene
from scripts.text import Text
from scripts.animatedBg import AnimatedBg

class Menu(Scene):
    def __init__(self):
        super().__init__()

        #depois iremos remover:
        self.bg = AnimatedBg("assets/menu/bg.png", [0,0], [0, -720], [self.all_sprites])
        self.title = Text("assets/fonts/airstrike.ttf", 50, "Navinha", "white", [490, 300])
        self.text_info = Text("assets/fonts/airstrike.ttf", 21, "Press Start To Play", "white", [480, 513])
        # dafont

    def events(self, event):
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_RETURN:
                self.active = False

    def update(self):
        self.bg.update()
        self.title.draw()
        self.text_info.drawFade()
        return super().update()
