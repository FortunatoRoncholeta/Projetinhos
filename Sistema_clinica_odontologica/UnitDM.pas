unit UnitDM;

interface

uses
  System.SysUtils, System.Classes, FireDAC.Stan.Intf, FireDAC.Stan.Option,
  FireDAC.Stan.Param, FireDAC.Stan.Error, FireDAC.DatS, FireDAC.Phys.Intf,
  FireDAC.DApt.Intf, FireDAC.Stan.Async, FireDAC.DApt, FireDAC.UI.Intf,
  FireDAC.Stan.Def, FireDAC.Stan.Pool, FireDAC.Phys, FireDAC.Phys.MySQL,
  FireDAC.Phys.MySQLDef, FireDAC.VCLUI.Wait, Data.DB, FireDAC.Comp.Client,
  FireDAC.Comp.DataSet;

type
  TDM = class(TDataModule)
    TbPaciente: TFDTable;
    conexao: TFDConnection;
    TbAgenda: TFDTable;
    DsAgenda: TDataSource;
    DsPaciente: TDataSource;
    TbPacienteid: TFDAutoIncField;
    TbPacienteNome: TStringField;
    TbPacienteContato: TStringField;
    TbPacienteCpf: TStringField;
    TbPacientedata_cadastro: TDateField;
    TbAgendaid: TFDAutoIncField;
    TbAgendaid_Paciente: TIntegerField;
    TbAgendaid_Dentista: TIntegerField;
    TbAgendaData: TDateField;
    TbAgendaHora: TStringField;
    TbAgendaEspecialidade: TIntegerField;
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  DM: TDM;

implementation

{%CLASSGROUP 'Vcl.Controls.TControl'}

{$R *.dfm}

end.
