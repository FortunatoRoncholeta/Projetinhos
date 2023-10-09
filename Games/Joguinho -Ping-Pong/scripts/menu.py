from scripts.obj import Obj
from scripts.scene import Scene


class Menu(Scene):
    def __init__(self):
        super().__init__()
        self.bg = Obj("assets/menu.png", [self.all_sprites])
