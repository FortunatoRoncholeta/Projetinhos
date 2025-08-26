object F_Menu: TF_Menu
  Left = 0
  Top = 0
  Caption = 'Menu'
  ClientHeight = 615
  ClientWidth = 1083
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -12
  Font.Name = 'Segoe UI'
  Font.Style = []
  Menu = MainMenu1
  Position = poMainFormCenter
  PixelsPerInch = 96
  TextHeight = 15
  object MainMenu1: TMainMenu
    Left = 80
    Top = 32
    object TMenuItem
    end
    object TMenuItem
    end
    object Ferramentas: TMenuItem
      Caption = 'Ferramentas'
      object Renomear: TMenuItem
        Caption = 'Renomear'
        OnClick = RenomearClick
      end
    end
    object TMenuItem
    end
  end
end
