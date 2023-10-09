import pygame


class Scene:
    def __init__(self):
        
        self.display = pygame.display.get_surface()

        self.all_sprites = pygame.sprite.Group()
        self.active = True

    def events(self, event):
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_RETURN:
                self.active = False

    def draw(self):
        self.all_sprites.draw(self.display)

    def update(self):
        self.all_sprites.update()
