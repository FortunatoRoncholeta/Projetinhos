import pygame

from scripts.obj import Obj
from scripts.scene import Scene
from scripts.text import Text
from scripts.animatedBg import AnimatedBg

class GameOver(Scene):
    def __init__(self):
        super().__init__()


        self.bg = AnimatedBg("assets/menu/bg.png", [0,0], [0, -720], [self.all_sprites])
        self.title = Text("assets/fonts/airstrike.ttf", 50, "A Navinha morreu", "white", [420, 300])
        self.text_info = Text("assets/fonts/airstrike.ttf", 21, "Press Start To Play", "white", [480, 513])
        # dafont

    def events(self, event):
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_RETURN:
                self.active = False

    def update(self):
        self.bg.update()
        self.title.draw()
        return super().update()
