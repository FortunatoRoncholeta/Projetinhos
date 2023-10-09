from scripts.scene import Scene
from scripts.obj import Obj


class Game(Scene):
    def __init__(self):
        super().__init__()
        self.bg = Obj("assets/bg.png", [self.all_sprites])
        

    
        
