from scripts.obj import Obj
from scripts.scene import Scene


class GameOver(Scene):
    def __init__(self):
        super().__init__()
        self.bg = Obj("assets/gameover.png", [self.all_sprites])
