object FormPaciente: TFormPaciente
  Left = 0
  Top = 0
  BorderIcons = [biSystemMenu]
  BorderStyle = bsSingle
  Caption = 'Cadastro de Pacientes'
  ClientHeight = 456
  ClientWidth = 724
  Color = clWhite
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -12
  Font.Name = 'Segoe UI'
  Font.Style = []
  Position = poScreenCenter
  TextHeight = 15
  object Panel1: TPanel
    Left = 0
    Top = 0
    Width = 724
    Height = 89
    Align = alTop
    TabOrder = 0
    ExplicitTop = -5
    object Label2: TLabel
      Left = 16
      Top = 9
      Width = 282
      Height = 37
      Caption = 'Cadastro de Pacientes'
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWindowText
      Font.Height = -27
      Font.Name = 'Segoe UI'
      Font.Style = [fsBold]
      ParentFont = False
    end
    object BuscaPaciente: TEdit
      Left = 247
      Top = 61
      Width = 129
      Height = 23
      TabOrder = 0
      Text = 'Buscar...'
      OnChange = BuscaPacienteChange
    end
    object DBNavigator1: TDBNavigator
      Left = 360
      Top = 16
      Width = 290
      Height = 38
      DataSource = DM.DsPaciente
      TabOrder = 1
    end
  end
  object Panel2: TPanel
    Left = 247
    Top = 89
    Width = 477
    Height = 367
    Align = alRight
    Caption = 'Panel2'
    TabOrder = 1
    ExplicitTop = 95
    object DBGrid1: TDBGrid
      Left = 1
      Top = 1
      Width = 475
      Height = 365
      Align = alRight
      DataSource = DM.DsPaciente
      TabOrder = 0
      TitleFont.Charset = DEFAULT_CHARSET
      TitleFont.Color = clWindowText
      TitleFont.Height = -12
      TitleFont.Name = 'Segoe UI'
      TitleFont.Style = []
      Columns = <
        item
          Expanded = False
          FieldName = 'id'
          Width = 46
          Visible = True
        end
        item
          Expanded = False
          FieldName = 'Nome'
          Width = 231
          Visible = True
        end
        item
          Expanded = False
          FieldName = 'Contato'
          Width = 115
          Visible = True
        end
        item
          Expanded = False
          FieldName = 'data_cadastro'
          Visible = True
        end>
    end
  end
  object Panel3: TPanel
    Left = 0
    Top = 89
    Width = 229
    Height = 367
    Align = alLeft
    Color = 10526880
    ParentBackground = False
    TabOrder = 2
    object Label1: TLabel
      Left = 16
      Top = 15
      Width = 65
      Height = 26
      Caption = 'Nome'
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWindowText
      Font.Height = -19
      Font.Name = 'Segoe UI'
      Font.Style = [fsBold]
      ParentFont = False
    end
    object Label3: TLabel
      Left = 16
      Top = 76
      Width = 72
      Height = 25
      Caption = 'Contato'
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWindowText
      Font.Height = -19
      Font.Name = 'Segoe UI'
      Font.Style = [fsBold]
      ParentFont = False
    end
    object Label4: TLabel
      Left = 16
      Top = 142
      Width = 41
      Height = 25
      Caption = 'CPF'
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWindowText
      Font.Height = -19
      Font.Name = 'Segoe UI'
      Font.Style = [fsBold]
      ParentFont = False
    end
    object Label5: TLabel
      Left = 16
      Top = 202
      Width = 149
      Height = 25
      Caption = 'Data de cadastro'
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWindowText
      Font.Height = -19
      Font.Name = 'Segoe UI'
      Font.Style = [fsBold]
      ParentFont = False
    end
    object DBEdit2: TDBEdit
      Left = 16
      Top = 47
      Width = 209
      Height = 23
      DataField = 'Nome'
      DataSource = DM.DsPaciente
      TabOrder = 0
    end
    object DBEdit3: TDBEdit
      Left = 16
      Top = 173
      Width = 121
      Height = 23
      DataField = 'Cpf'
      DataSource = DM.DsPaciente
      MaxLength = 14
      TabOrder = 1
    end
    object DBEdit4: TDBEdit
      Left = 16
      Top = 107
      Width = 153
      Height = 23
      DataField = 'Contato'
      DataSource = DM.DsPaciente
      MaxLength = 13
      TabOrder = 2
    end
    object DBEdit5: TDBEdit
      Left = 16
      Top = 243
      Width = 113
      Height = 23
      DataField = 'data_cadastro'
      DataSource = DM.DsPaciente
      MaxLength = 8
      TabOrder = 3
    end
  end
end
