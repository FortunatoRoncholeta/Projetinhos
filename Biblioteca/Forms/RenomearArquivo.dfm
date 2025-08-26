object F_RenomearArquivo: TF_RenomearArquivo
  Left = 0
  Top = 0
  Caption = 'Renomear Arquivo'
  ClientHeight = 600
  ClientWidth = 1024
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -12
  Font.Name = 'Segoe UI'
  Font.Style = []
  Position = poMainFormCenter
  OnClose = FormClose
  PixelsPerInch = 96
  TextHeight = 15
  object Panel1: TPanel
    Left = 0
    Top = 0
    Width = 1025
    Height = 601
    TabOrder = 0
    object Bt_RenomeaArquivo: TSpeedButton
      Left = 654
      Top = 78
      Width = 97
      Height = 34
      Caption = 'Renomear'
      OnClick = Bt_RenomeaArquivoClick
    end
    object Bt_Desfazer: TSpeedButton
      Left = 654
      Top = 118
      Width = 97
      Height = 34
      Caption = 'Desfazer'
    end
    object Bt_Limpar: TSpeedButton
      Left = 121
      Top = 87
      Width = 97
      Height = 34
      Caption = 'Limpar'
      OnClick = Bt_LimparClick
    end
    object Bt_Carregar: TSpeedButton
      Left = 121
      Top = 47
      Width = 97
      Height = 34
      Caption = 'Carregar'
      OnClick = Bt_CarregarClick
    end
    object Ed_Caminho: TEdit
      Left = 224
      Top = 49
      Width = 424
      Height = 23
      Enabled = False
      TabOrder = 0
      Text = 'Caminho'
    end
    object Cbo_Tipo: TComboBox
      Left = 654
      Top = 49
      Width = 97
      Height = 23
      TabOrder = 1
      Text = 'Cbo_Tipo'
    end
    object Ed_NomeArquivo: TEdit
      Left = 224
      Top = 80
      Width = 273
      Height = 23
      TabOrder = 2
      Text = 'Nome do Arquivo'
    end
    object Ed_NovoNomeArquivo: TEdit
      Left = 224
      Top = 111
      Width = 273
      Height = 23
      TabOrder = 3
      Text = 'Novo Nome do Arquivo'
    end
    object ListBox1: TListBox
      Left = 8
      Top = 183
      Width = 1001
      Height = 402
      ItemHeight = 15
      TabOrder = 4
    end
  end
end
