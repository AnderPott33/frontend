
// src/components/InformeFinanciero.jsx
import React, { useRef } from "react";

export default function InformeFinanciero({ data }) {
  const printRef = useRef();

  const handlePrint = () => {
    const content = printRef.current.innerHTML;
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>Registro Financiero</title>
          <style>
        html {
  scroll-behavior: smooth;
}

.table-print {
  border-collapse: separate;
  border-spacing: 0;
}

.table-print th,
.table-print td {
  border: 1px solid #e2e8f0;
}

.table-print th {
  background: #f1f5f9;
}

.table-print .num {
  text-align: right;
  font-variant-numeric: tabular-nums;
}

.meta-item {
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

*,
::before,
::after {
  box-sizing: border-box;
  undefined: undefined;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;
}

html,
:host {
  line-height: 1.5;
  undefined: undefined;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  tab-size: 4;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings: normal;
  font-variation-settings: normal;
  -webkit-tap-highlight-color: transparent;
}

body {
  margin: 0;
  undefined: undefined;
  line-height: inherit;
}

hr {
  height: 0;
  undefined: undefined;
  color: inherit;
  border-top-width: 1px;
}

abbr:where([title]) {
  text-decoration: underline dotted;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

a {
  color: inherit;
  text-decoration: inherit;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  undefined: undefined;
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-size: 1em;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

table {
  text-indent: 0;
  undefined: undefined;
  border-color: inherit;
  border-collapse: collapse;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  undefined: undefined;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}

button,
select {
  text-transform: none;
}

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button;
  undefined: undefined;
  background-color: transparent;
  background-image: none;
}

:-moz-focusring {
  outline: auto;
}

:-moz-ui-invalid {
  box-shadow: none;
}

progress {
  vertical-align: baseline;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

[type='search'] {
  -webkit-appearance: textfield;
  undefined: undefined;
  outline-offset: -2px;
}

::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  undefined: undefined;
  font: inherit;
}

summary {
  display: list-item;
}

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

dialog {
  padding: 0;
}

textarea {
  resize: vertical;
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  undefined: undefined;
  color: #9ca3af;
}

button,
[role="button"] {
  cursor: pointer;
}

:disabled {
  cursor: default;
}

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  undefined: undefined;
  vertical-align: middle;
}

img,
video {
  max-width: 100%;
  height: auto;
}

[hidden] {
  display: none;
}

.cls-qo8foz {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.cls-bxh6nz {
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-radius: 0.75rem;
}

.encabezado {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  border-bottom-width: 1px;
  border-color: rgb(226 232 240 / 1);
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.marca-empresa {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.cls-hhbo26 {
  width: 3.5rem;
  height: 3.5rem;
  object-fit: contain;
  border-radius: 0.375rem;
  box-shadow: 0 0 0 0px #fff, 0 0 0 calc(1px + 0px) rgb(59 130 246 / 0.5), 0 0 #0000;
}

.nombre-empresa {
  display: flex;
  flex-direction: column;
}

.cls-pz578m {
  color: rgb(15 23 42 / 1);
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.cls-kr7zpc {
  color: rgb(100 116 139 / 1);
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.cls-h9i2j4 {
  color: rgb(100 116 139 / 1);
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.titulo-documento {
  text-align: right;
}

.cls-pf5mds {
  font-weight: 700;
  font-family: 'Roboto Slab', serif;
  letter-spacing: -0.025em;
}

.cls-as35wz {
  margin-top: 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  border-radius: 0.375rem;
  box-shadow: 0 0 0 0px #fff, 0 0 0 calc(1px + 0px) rgb(59 130 246 / 0.5), 0 0 #0000;
}

.cls-lls6wq {
  width: 1rem;
  height: 1rem;
}

.cls-1udczh {
  color: rgb(51 65 85 / 1);
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
}

.metadatos {
  margin-top: 1.5rem;
}

.cls-xg3oyr {
  border-radius: 0.5rem;
  box-shadow: 0 0 0 0px #fff, 0 0 0 calc(1px + 0px) rgb(59 130 246 / 0.5), 0 0 #0000;
  overflow: hidden;
}

.cls-74q283 {
  background-image: linear-gradient(to right, #f8fafc, rgb(248 250 252 / 0));
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  border-bottom-width: 1px;
  border-color: rgb(226 232 240 / 1);
}

.cls-5l5l10 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.cls-0amwyr {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.cls-guebgb {
  width: 1rem;
  height: 1rem;
}

.cls-7ecarq {
  color: rgb(51 65 85 / 1);
  font-weight: 600;
}

.cls-finnfu {
  color: rgb(100 116 139 / 1);
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.cls-ueq0ot {
  padding: 1.25rem;
}

.cls-v2mn68 {
  font-weight: 500;
}

.cls-1xglms {
  font-weight: 500;
}

.cls-d0687v {
  font-weight: 500;
}

.cls-yi0dqd {
  font-weight: 500;
}

.cls-vv34kg {
  font-weight: 500;
}

.cls-t95hlg {
  font-weight: 500;
}

.cls-czvpsj {
  color: rgb(4 120 87 / 1);
}

.cls-djbvxf {
  font-weight: 500;
}

.cls-vot5ml {
  font-weight: 500;
}

.tabla-movimientos {
  margin-top: 2rem;
}

.cls-w5bl7e {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.cls-zpje7x {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.cls-i8p7mx {
  width: 1rem;
  height: 1rem;
}

.cls-is67rx {
  color: rgb(51 65 85 / 1);
  font-weight: 600;
}

.cls-95wj56 {
  overflow-x: auto;
  border-radius: 0.5rem;
  box-shadow: 0 0 0 0px #fff, 0 0 0 calc(1px + 0px) rgb(59 130 246 / 0.5), 0 0 #0000;
}

.tabla {
  width: 100%;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.cls-0fsjwg {
  color: rgb(51 65 85 / 1);
}

.cls-fzxy42 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-align: left;
  font-weight: 600;
}

.cls-yxwv9m {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-align: left;
  font-weight: 600;
}

.cls-f503iz {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-align: left;
  font-weight: 600;
}

.cls-fcg02u {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-align: left;
  font-weight: 600;
}

.cls-9vp79f {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-align: right;
  font-weight: 600;
}

.cls-mwfbe6 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-align: right;
  font-weight: 600;
}

.cls-rqb7at {
  color: rgb(51 65 85 / 1);
}

.fila-movimiento {
  vertical-align: top;
}

.cls-y462q6 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.cls-f4n8t4 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.cls-p3qssp {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.cls-ipddgo {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

.cls-ba4q1l {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

.cls-p9rlpm {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

.cls-9dogc6 {
  background-color: rgb(248 250 252 / 1);
}

.cls-1ovg51 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-weight: 600;
}

.cls-q43c75 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-weight: 600;
}

.firmas {
  margin-top: 2.5rem;
}

.cls-jzx1kl {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

#icur4 {
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

@page {
  size: A4;
  margin: 16mm;
}

@media print {

  html,
  body {
    background: #fff;
  }

  .page-footer .page-number::after {
    content: counter(page);
  }
}

@media (max-width: 992px) {
  .cls-bxh6nz {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;}.encabezado {padding-top: 1.25rem;padding-bottom: 1.25rem;}.cls-jzx1kl {grid-template-columns: repeat(2, minmax(0, 1fr));}}@media (max-width: 480px) {.gjs-t-h1 {font-size: 22px;}.cls-bxh6nz {margin-top: 1rem;margin-bottom: 1rem;padding-left: 1rem;padding-right: 1rem;}.encabezado {padding-top: 1rem;padding-bottom: 1rem;}.cls-jzx1kl {grid-template-columns: repeat(1, minmax(0, 1fr));}}
   
            body { font-family: ui-sans-serif, system-ui, sans-serif; margin: 0; }
            .tabla-print { border-collapse: separate; border-spacing: 0; }
            .tabla-print th, .tabla-print td { border: 1px solid #e2e8f0; padding: 0.5rem; }
            .tabla-print th { background: #f1f5f9; }
            .num { text-align: right; }
            @page { size: A4; margin: 16mm; }
          </style>
        </head>
        <body>
          ${content}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  return (
    <div>
      <button onClick={handlePrint}>Imprimir Informe</button>
      <div ref={printRef}>
        <main className="cls-bxh6nz">
          <header className="encabezado">
            <div className="marca-empresa">
              <img
                alt="Logo"
                src="https://cdn.grapesjs.com/workspaces/cmnq3iawc16jb4lmutiz1o9gy/assets/c051235c-a435-4db8-ac0b-8e9be998d074__favicon.svg"
                className="cls-hhbo26"
              />
              <div className="nombre-empresa">
                <span className="cls-pz578m">{data.empresa_nombre}</span>
                <span className="cls-kr7zpc">{data.empresa_direccion}</span>
                <span className="cls-h9i2j4">RUC: {data.empresa_ruc} | Tel: {data.empresa_tel}</span>
              </div>
            </div>
            <div className="titulo-documento">
              <h1 className="cls-pf5mds">Registro Financiero / Comprobante</h1>
              <div className="cls-as35wz">
                <span className="cls-1udczh">Moneda base: {data.moneda_base}</span>
              </div>
            </div>
          </header>

          {/* Tabla de movimientos */}
          <section className="tabla-movimientos">
            <table className="tabla-print">
              <thead>
                <tr>
                  <th>Cuenta</th>
                  <th>Documento</th>
                  <th>Entidad</th>
                  <th>Cambio</th>
                  <th className="num">Débito</th>
                  <th className="num">Crédito</th>
                </tr>
              </thead>
              <tbody>
                {data.detalles.map((row, i) => (
                  <tr key={i}>
                    <td>{row.cuenta_nombre}</td>
                    <td>{row.documento}</td>
                    <td>{row.entidad}</td>
                    <td>{row.cambio}</td>
                    <td className="num">{row.debito}</td>
                    <td className="num">{row.credito}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>Totales</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="num">{data.total_debito}</td>
                  <td className="num">{data.total_credito}</td>
                </tr>
              </tfoot>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
}