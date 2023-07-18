unit UnitPaciente;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.StdCtrls, Data.DB, Vcl.DBCtrls,
  Vcl.Grids, Vcl.DBGrids, Vcl.Mask, Vcl.ExtCtrls;

type
  TFormPaciente = class(TForm)
    Label1: TLabel;
    Panel1: TPanel;
    Label2: TLabel;
    DBEdit2: TDBEdit;
    DBEdit3: TDBEdit;
    DBEdit4: TDBEdit;
    DBEdit5: TDBEdit;
    Label3: TLabel;
    Label4: TLabel;
    Label5: TLabel;
    DBGrid1: TDBGrid;
    BuscaPaciente: TEdit;
    DBNavigator1: TDBNavigator;
    Panel2: TPanel;
    Panel3: TPanel;
    procedure BuscaPacienteChange(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FormPaciente: TFormPaciente;

implementation


uses UnitDM;
{$R *.dfm}

procedure TFormPaciente.BuscaPacienteChange(Sender: TObject);
begin
      DM.TbPaciente.Locate('Nome',buscaPaciente.Text,[loPartialKey]);
      DM.TbPaciente.Locate('id',buscaPaciente.Text,[loPartialKey]);

end;

end.
