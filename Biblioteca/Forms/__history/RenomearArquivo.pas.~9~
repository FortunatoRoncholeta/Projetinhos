unit RenomearArquivo;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.StdCtrls, Vcl.Buttons, Vcl.ExtCtrls,
  System.IOUtils, System.Types, Vcl.FileCtrl;

type
  TF_RenomearArquivo = class(TForm)
    Panel1: TPanel;
    Ed_Caminho: TEdit;
    Cbo_Tipo: TComboBox;
    Bt_RenomeaArquivo: TSpeedButton;
    Bt_Desfazer: TSpeedButton;
    Bt_Limpar: TSpeedButton;
    Ed_NomeArquivo: TEdit;
    Ed_NovoNomeArquivo: TEdit;
    ListBox1: TListBox;
    Bt_Carregar: TSpeedButton;
    procedure Bt_CarregarClick(Sender: TObject);
    procedure Bt_LimparClick(Sender: TObject);
    procedure Bt_RenomeaArquivoClick(Sender: TObject);


  private


  public
  procedure CarregarArquivos(const Pasta: string);

  end;

var
  F_RenomearArquivo: TF_RenomearArquivo;

implementation

{$R *.dfm}

uses
  System.StrUtils;




  // Funçoes

procedure TF_RenomearArquivo.CarregarArquivos(const Pasta: string);
const
   ExtensoesSuportadas: array[0..6] of string = ('.jpg', '.jpeg', '.png', '.mp4', '.avi', '.mov', '.mkv');
var
   Arquivos: TStringDynArray;
   Arquivo: string;
   Ext: string;
begin
   ListBox1.Items.Clear;

   Arquivos := TDirectory.GetFiles(Pasta, '*.*', TSearchOption.soTopDirectoryOnly);
   for Arquivo in Arquivos do
   begin
      Ext := LowerCase(ExtractFileExt(Arquivo));
      if MatchText(Ext, ExtensoesSuportadas) then
         ListBox1.Items.Add(Arquivo);
   end;

   if ListBox1.Count = 0 then
      ShowMessage('Nenhum arquivo de imagem ou vídeo encontrado.');
end;



   // ======Botoes=====

procedure TF_RenomearArquivo.Bt_CarregarClick(Sender: TObject);
var
   Pasta: string;
begin
   if SelectDirectory('Selecione a pasta com os arquivos', '', Pasta) then
   begin
      Ed_Caminho.Text := Pasta;
      CarregarArquivos(Pasta);
   end;
end;


  procedure TF_RenomearArquivo.Bt_LimparClick(Sender: TObject);
begin

   Ed_Caminho.Text         := '';
   Ed_NomeArquivo.Text     := '';
   Ed_NovoNomeArquivo.Text := '';


end;



procedure TF_RenomearArquivo.Bt_RenomeaArquivoClick(Sender: TObject);
var
  Arquivos: TStringDynArray;
  Arquivo, NomeFinal, Extensao: string;
  Caminho, TextoRemover: string;
begin
  Caminho := Ed_Caminho.Text;
  if Caminho = '' then
  begin
    ShowMessage('Informe a pasta!');
    Exit;
  end;

  Arquivos := TDirectory.GetFiles(Caminho);

  for Arquivo in Arquivos do
  begin
    NomeFinal := TPath.GetFileNameWithoutExtension(Arquivo);
    Extensao := TPath.GetExtension(Arquivo);

    // Remove texto do começo, meio ou fim (prefixo, sufixo ou intermediário)
    TextoRemover := Trim(Ed_NomeArquivo.Text);
    if TextoRemover <> '' then
      NomeFinal := NomeFinal.Replace(TextoRemover, '', [rfIgnoreCase]);

    TextoRemover := Trim(Ed_NovoNomeArquivo.Text);
    if TextoRemover <> '' then
      NomeFinal := NomeFinal.Replace(TextoRemover, '', [rfIgnoreCase]);

    NomeFinal := Trim(NomeFinal); // remove espaços extras

    // Renomeia o arquivo
    try
      TFile.Move(Arquivo, TPath.Combine(Caminho, NomeFinal + Extensao));
    except
      on E: Exception do
        ShowMessage('Erro ao renomear: ' + TPath.GetFileName(Arquivo) + sLineBreak + E.Message);
    end;
  end;

  ShowMessage('Arquivos processados!');
end;


end.
