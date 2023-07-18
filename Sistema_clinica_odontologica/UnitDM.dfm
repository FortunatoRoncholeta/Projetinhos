object DM: TDM
  Height = 480
  Width = 640
  object TbPaciente: TFDTable
    Active = True
    IndexFieldNames = 'id'
    Connection = conexao
    ResourceOptions.AssignedValues = [rvEscapeExpand]
    TableName = 'clinicaodonto.paciente'
    Left = 96
    Top = 160
    object TbPacienteid: TFDAutoIncField
      FieldName = 'id'
      Origin = 'id'
      ProviderFlags = [pfInWhere, pfInKey]
    end
    object TbPacienteNome: TStringField
      FieldName = 'Nome'
      Origin = 'Nome'
      Required = True
      Size = 50
    end
    object TbPacienteContato: TStringField
      FieldName = 'Contato'
      Origin = 'Contato'
      Required = True
      EditMask = '!\(99\)0000-0000;1;_'
      Size = 16
    end
    object TbPacienteCpf: TStringField
      FieldName = 'Cpf'
      Origin = 'Cpf'
      Required = True
      EditMask = '###.###.###-##;1;_'
      Size = 14
    end
    object TbPacientedata_cadastro: TDateField
      FieldName = 'data_cadastro'
      Origin = 'data_cadastro'
      Required = True
      EditMask = '!99/99/00;1;_'
    end
  end
  object conexao: TFDConnection
    Params.Strings = (
      'Database=clinicaodonto'
      'DriverID=MySQL'
      'User_Name=root')
    Connected = True
    LoginPrompt = False
    Left = 96
    Top = 72
  end
  object TbAgenda: TFDTable
    Active = True
    IndexFieldNames = 'id'
    Connection = conexao
    ResourceOptions.AssignedValues = [rvEscapeExpand]
    TableName = 'clinicaodonto.agenda'
    Left = 104
    Top = 240
    object TbAgendaid: TFDAutoIncField
      FieldName = 'id'
      Origin = 'id'
      ProviderFlags = [pfInWhere, pfInKey]
    end
    object TbAgendaid_Paciente: TIntegerField
      FieldName = 'id_Paciente'
      Origin = 'id_Paciente'
      Required = True
    end
    object TbAgendaid_Dentista: TIntegerField
      FieldName = 'id_Dentista'
      Origin = 'id_Dentista'
      Required = True
    end
    object TbAgendaData: TDateField
      FieldName = 'Data'
      Origin = 'Data'
      Required = True
    end
    object TbAgendaHora: TStringField
      FieldName = 'Hora'
      Origin = 'Hora'
      Required = True
      Size = 8
    end
    object TbAgendaEspecialidade: TIntegerField
      FieldName = 'Especialidade'
      Origin = 'Especialidade'
      Required = True
    end
  end
  object DsAgenda: TDataSource
    DataSet = TbAgenda
    Left = 200
    Top = 240
  end
  object DsPaciente: TDataSource
    DataSet = TbPaciente
    Left = 200
    Top = 160
  end
end
