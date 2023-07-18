program Sistema_clinica;

uses
  Vcl.Forms,
  UnitPrincipal in 'UnitPrincipal.pas' {FormPrincipal},
  UnitPaciente in 'UnitPaciente.pas' {FormPaciente},
  UnitAgenda in 'UnitAgenda.pas' {FormAgenda},
  UnitDM in 'UnitDM.pas' {DM: TDataModule};

{$R *.res}

begin
  Application.Initialize;
  Application.MainFormOnTaskbar := True;
  Application.CreateForm(TFormPrincipal, FormPrincipal);
  Application.CreateForm(TFormPaciente, FormPaciente);
  Application.CreateForm(TFormAgenda, FormAgenda);
  Application.CreateForm(TDM, DM);
  Application.Run;
end.
