// src/impresion/ImpresionMovimientos.js
import { formatearFecha, formatearNumero } from "../components/FormatoFV";

export default function imprimirFactura(factura) {
  if (!factura) return;
  const { encabezado, detalle, pagos } = factura.datosVentaImprimir
  const { totales } = factura;

  const contenido = `
     <!DOCTYPE html>
<html lang="es">

  <head>
    <title>Factura Modelo</title>
    <meta charset="utf-8" />
   <style>html {
  scroll-behavior: smooth;
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

.cls-vw3f8v {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.invoice-wrapper {
  max-width: 64rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.header-section {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.brand-logo {
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  border-radius: 0.5rem;
  border-width: 1px;
  border-color: rgb(226 232 240 / 1);
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.invoice-title {
  font-family: 'Playfair Display';
  letter-spacing: -0.025em;
}

.brand-subtitle {
  color: rgb(71 85 105 / 1);
  font-family: 'Inter';
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.invoice-meta-top {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
}

.invoice-number-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon-hash {
  width: 1rem;
  height: 1rem;
  opacity: 0.8;
}

.label {
  color: rgb(100 116 139 / 1);
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.value-numero {
  color: rgb(15 23 42 / 1);
  font-weight: 600;
}

.invoice-timbrado-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon-stamp {
  width: 1rem;
  height: 1rem;
  opacity: 0.8;
}

.value-timbrado {
  color: rgb(15 23 42 / 1);
  font-weight: 500;
}

.invoice-date-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon-calendar {
  width: 1rem;
  height: 1rem;
  opacity: 0.8;
}

.value-fecha {
  color: rgb(15 23 42 / 1);
}

.seller-and-client-card {
  background-color: rgb(255 255 255 / 1);
  border-width: 1px;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05);
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.two-columns {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2.5rem;
}

.seller-block {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.seller-heading {
  font-family: 'Inter';
  font-weight: 600;
}

.divider {
  height: 1px;
  background-color: rgb(226 232 240 / 1);
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.seller-fields {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  color: rgb(51 65 85 / 1);
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.seller-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon-company {
  width: 1rem;
  height: 1rem;
}

.icon-address {
  width: 1rem;
  height: 1rem;
}

.icon-phone {
  width: 1rem;
  height: 1rem;
}

.icon-mail {
  width: 1rem;
  height: 1rem;
}

.icon-ruc {
  width: 1rem;
  height: 1rem;
}

.client-block {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.client-heading {
  font-family: 'Inter';
  font-weight: 600;
}

.client-fields {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  color: rgb(51 65 85 / 1);
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.client-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon-client {
  width: 1rem;
  height: 1rem;
}

.icon-moneda {
  width: 1rem;
  height: 1rem;
}

.icon-condicion {
  width: 1rem;
  height: 1rem;
}

.icon-estado {
  width: 1rem;
  height: 1rem;
}

.invoice-meta-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.meta-card {
  display: flex;
  flex-direction: column;
  background-color: rgb(248 250 252 / 1);
  border-width: 1px;
  border-color: rgb(226 232 240 / 1);
  border-radius: 0.75rem;
  padding: 1rem;
}

.meta-label {
  font-size: 0.75rem;
  line-height: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgb(100 116 139 / 1);
}

.meta-value {
  color: rgb(15 23 42 / 1);
  font-weight: 600;
  margin-top: 0.25rem;
}

.items-section {
  background-color: rgb(255 255 255 / 1);
  border-width: 1px;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05);
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.items-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.items-heading {
  font-family: 'Inter';
  font-weight: 600;
}

.items-legends {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.legend {
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgb(100 116 139 / 1);
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  border-width: 1px;
  border-color: rgb(226 232 240 / 1);
  border-radius: 0.25rem;
}

.items-grid-header {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: rgb(248 250 252 / 1);
  border-radius: 0.5rem;
  border-width: 1px;
  border-color: rgb(226 232 240 / 1);
  color: rgb(71 85 105 / 1);
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
}

.header-col {
  grid-column: span 1 / span 1;
  text-align: right;
}

.items-list> :not([hidden])~ :not([hidden]) {
  border-top-width: calc(1px * calc(1 - 0));
  border-bottom-width: calc(1px * 0);
  border-color: rgb(226 232 240 / 1);
}

.item-row {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  align-items: flex-start;
}

.item-product {
  grid-column: span 3 / span 3;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.product-name {
  color: rgb(15 23 42 / 1);
  font-weight: 500;
}

.product-code {
  color: rgb(100 116 139 / 1);
  font-size: 0.75rem;
  line-height: 1rem;
}

.item-qty {
  grid-column: span 1 / span 1;
  text-align: right;
  color: rgb(51 65 85 / 1);
}

.item-unit-price {
  grid-column: span 1 / span 1;
  text-align: right;
  color: rgb(51 65 85 / 1);
}

.item-amount {
  grid-column: span 1 / span 1;
  text-align: right;
  color: rgb(15 23 42 / 1);
  font-weight: 600;
}

.items-footnote {
  margin-top: 1rem;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgb(100 116 139 / 1);
}

.summary-and-notes {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;
}

.notes-card {
  flex: 1 1 0%;
  background-color: rgb(255 255 255 / 1);
  border-width: 1px;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05);
  padding: 1.5rem;
}

.notes-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.icon-notes {
  width: 1rem;
  height: 1rem;
}

.notes-title {
  color: rgb(30 41 59 / 1);
  font-weight: 600;
  font-family: 'Inter';
}

.notes-text {
  color: rgb(71 85 105 / 1);
  font-size: 0.875rem;
  line-height: 1.5rem;
}

.totals-card {
  width: 100%;
  max-width: 28rem;
  background-color: rgb(255 255 255 / 1);
  border-width: 1px;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05);
  padding: 1.5rem;
}

.subtotal-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: rgb(51 65 85 / 1);
}

.subtotal-label {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.subtotal-value {
  font-weight: 500;
}

.taxes-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: rgb(51 65 85 / 1);
}

.taxes-label {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.taxes-value {
  font-weight: 500;
}

.total-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.total-label {
  color: rgb(15 23 42 / 1);
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
}

.total-value {
  color: rgb(15 23 42 / 1);
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.currency-hint {
  margin-top: 0.75rem;
  text-align: right;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgb(100 116 139 / 1);
}

.payments-section {
  background-color: rgb(255 255 255 / 1);
  border-width: 1px;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05);
  padding: 1.5rem;
  margin-bottom: 2.5rem;
}

.payments-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.payments-heading {
  font-family: 'Inter';
  font-weight: 600;
}

.payments-count {
  color: rgb(100 116 139 / 1);
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.payments-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.payment-item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1rem;
  border-width: 1px;
  border-color: rgb(226 232 240 / 1);
  border-radius: 0.75rem;
}

.payment-left {
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.payment-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgb(71 85 105 / 1);
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.icon-forma-pago {
  width: 1rem;
  height: 1rem;
}

.forma-pago {
  color: rgb(51 65 85 / 1);
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.forma-pago-code {
  color: rgb(148 163 184 / 1);
  font-size: 0.75rem;
  line-height: 1rem;
}

.icon-monto {
  width: 1rem;
  height: 1rem;
}

.monto {
  color: rgb(15 23 42 / 1);
  font-weight: 600;
}

.moneda {
  color: rgb(100 116 139 / 1);
  font-size: 0.75rem;
  line-height: 1rem;
}

.icon-fecha-pago {
  width: 1rem;
  height: 1rem;
}

.payment-right {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  text-align: right;
}

.cuenta-etiqueta {
  color: rgb(100 116 139 / 1);
  font-size: 0.75rem;
  line-height: 1rem;
}

.cuenta-nombre {
  color: rgb(30 41 59 / 1);
  font-weight: 500;
}

.cuenta-id {
  color: rgb(100 116 139 / 1);
  font-size: 0.75rem;
  line-height: 1rem;
}

.banco-etiqueta {
  color: rgb(100 116 139 / 1);
  font-size: 0.75rem;
  line-height: 1rem;
}

.banco {
  color: rgb(30 41 59 / 1);
}

.cheque-etiqueta {
  color: rgb(100 116 139 / 1);
  font-size: 0.75rem;
  line-height: 1rem;
}

.cheque {
  color: rgb(30 41 59 / 1);
}

.pago-id {
  color: rgb(148 163 184 / 1);
  font-size: 0.75rem;
  line-height: 1rem;
  margin-top: 0.5rem;
}

.payments-footnote {
  margin-top: 0.75rem;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgb(100 116 139 / 1);
}

.footer-note {
  margin-top: 2.5rem;
  text-align: center;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgb(100 116 139 / 1);
}

@media (max-width: 992px) {
  .invoice-wrapper {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  .two-columns {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .invoice-meta-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .summary-and-notes {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .invoice-wrapper {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .invoice-meta-grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}</style>
    </head>

  <body class="gjs-t-body cls-vw3f8v">
    <main class="invoice-wrapper" id="iiw47">
      <section class="header-section" id="i74rh">
        <div class="brand-block" id="i04nr">
          <img src="https://app.grapesjs.com/api/assets/random-image?query=logo&amp;w=72&amp;h=72" alt="Logo" class="brand-logo" id="iq8om" />
          <div class="brand-text" id="ii2fr">
            <h1 class="gjs-t-h1 invoice-title" id="i9j69">Factura</h1>
            <p class="brand-subtitle" id="i4d9y">Documento comercial</p>
          </div>
        </div>
        <div class="invoice-meta-top" id="iqt6d">
          <div class="invoice-number-row" id="irvxh">
            <img src="https://api.iconify.design/lucide-hash.svg?color=%231f2937" alt="" class="icon-hash" id="iswo6" />
            <span class="label" id="i7v02">N.º</span>
            <span class="value-numero" id="ivsrw">${encabezado.numero_factura}</span>
          </div>
          <div class="invoice-timbrado-row" id="ip7ue">
            <img src="https://api.iconify.design/lucide-stamp.svg?color=%231f2937" alt="" class="icon-stamp" id="ib4ig" />
            <span class="label" id="i0e33">Timbrado</span>
            <span class="value-timbrado" id="ikr3l">${encabezado.timbrado}</span>
          </div>
          <div class="invoice-date-row" id="iq1gj">
            <img src="https://api.iconify.design/lucide-calendar.svg?color=%231f2937" alt="" class="icon-calendar" id="i0asg" />
            <span class="label" id="ibitq">Fecha</span>
            <span class="value-fecha" id="idijk">${formatearFecha(encabezado.fecha)}</span>
          </div>
        </div>
      </section>
      <section class="gjs-t-border seller-and-client-card" id="il2vp">
        <div class="two-columns" id="ibz1m">
          <div class="seller-block" id="iyxae">
            <h2 class="gjs-t-h2 seller-heading" id="iop7p">Emisor</h2>
            <div class="divider" id="ixgy5"></div>
            <div class="seller-fields" id="it0gf">
              <div class="seller-item" id="itall">
                <img src="https://api.iconify.design/lucide-building-2.svg?color=%2364748b" alt="" class="icon-company" id="iv6uu" />
                <span id="i7osg">Anderson Pott Marafon</span>
              </div>
              <div class="seller-item" id="ih65i">
                <img src="https://api.iconify.design/lucide-map-pin.svg?color=%2364748b" alt="" class="icon-address" id="i4vub" />
                <span id="ion42">Santa Rita, Alto Paraná, Paraguay.</span>
              </div>
              <div class="seller-item" id="i68hc">
                <img src="https://api.iconify.design/lucide-phone.svg?color=%2364748b" alt="" class="icon-phone" id="ijhlf" />
                <span id="i2z38">0982 771 774</span>
              </div>
              <div class="seller-item" id="it9yg">
                <img src="https://api.iconify.design/lucide-mail.svg?color=%2364748b" alt="" class="icon-mail" id="ixxlj" />
                <span id="ivgss">anderpott33@gmail.com</span>
              </div>
              <div class="seller-item" id="iljv8">
                <img src="https://api.iconify.design/lucide-badge-percent.svg?color=%2364748b" alt="" class="icon-ruc" id="iu9km" />
                <span id="icwmh">RUC 6930017</span>
              </div>
            </div>
          </div>
          <div class="client-block" id="ich9b">
            <h2 class="gjs-t-h2 client-heading" id="izk9o">Cliente</h2>
            <div class="divider" id="ia46m"></div>
            <div class="client-fields" id="icgsl">
              <div class="client-item" id="icryl">
                <img src="https://api.iconify.design/lucide-user-2.svg?color=%2364748b" alt="" class="icon-client" id="iehee" />
                <span id="i3rfw">${encabezado.cliente_nombre}</span>
              </div>
              <div class="client-item" id="ikd9q">
                <img src="https://api.iconify.design/lucide-card.svg?color=%2364748b" alt="" class="icon-ruc" id="i1rg8" />
                <span id="ihqup">RUC ${encabezado.cliente_ruc}</span>
              </div>
              <div class="client-item" id="imgsw">
                <img src="https://api.iconify.design/lucide-badge-dollar-sign.svg?color=%2364748b" alt="" class="icon-moneda" id="ikrg1" />
                <span id="iqb23">Moneda ${encabezado.moneda}</span>
              </div>
              <div class="client-item" id="imsno">
                <img src="https://api.iconify.design/lucide-wallet.svg?color=%2364748b" alt="" class="icon-condicion" id="ihuuh" />
                <span id="iobx8">${encabezado.condicion_pago}</span>
              </div>
              <div class="client-item" id="ieb7o">
                <img src="https://api.iconify.design/lucide-info.svg?color=%2364748b" alt="" class="icon-estado" id="i2brn" />
                <span id="is0vj">${encabezado.estado}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="invoice-meta-grid" id="ipqw5">
          <div class="meta-card" id="im5nx">
            <span class="meta-label" id="iq7c9">ID Interno</span>
            <span class="meta-value" id="ioif4">${encabezado.id}</span>
          </div>
          <div class="meta-card" id="id4fo">
            <span class="meta-label" id="ilyhg">Tipo</span>
            <span class="meta-value" id="inpj5y">${encabezado.tipo}</span>
          </div>
          <div class="meta-card" id="iba0w5">
            <span class="meta-label" id="izyz9k">Referencia</span>
            <span class="meta-value" id="i9bxkv">${encabezado.referencia_id}</span>
          </div>
        </div>
      </section>
      <section class="gjs-t-border items-section" id="ittkqc">
        <div class="items-header" id="i56eo7">
          <h2 class="gjs-t-h2 items-heading" id="ilsewf">Detalle de Ítems</h2>
          <div class="items-legends" id="i36k3h">
            <span class="legend" id="i9fb1j">Cant.</span>
            <span class="legend" id="iw2c0f">Precio Unit.</span>
            <span class="legend" id="inadsq">Importe</span>
          </div>
        </div>
        <div class="items-grid-header" id="ikz8hn">
          <div class="header-col" id="iurq0y">Producto</div>
          <div class="header-col" id="i9s7ox">Cantidad</div>
          <div class="header-col" id="ig80lq">Precio</div>
          <div class="header-col" id="ihb769">Importe</div>
        </div>
        <div class="items-list" id="i4vueb">
          ${detalle?.map(d => `
                  <div class="item-row" id = "iem5ft">
                    <div class="item-product" id="iykmps">
                      <span class="product-name" id="iqnesq">${d.producto_nombre}</span>
                      <span class="product-code" id="id2ank">ID ${d.producto_id}</span>
                    </div>
                    <div class="item-qty" id="i1ocpj">${d.cantidad}</div>
                    <div class="item-unit-price" id="iqkmuc">${d.precio_unitario}</div>
                    <div class="item-amount" id="itne81">${d.total}</div>
                  </div >
            `).join('')}
        </div >
      </section >
      <section class="summary-and-notes" id="i37h01">
        <div class="gjs-t-border notes-card" id="i9xvlo">
          <div class="notes-header" id="iuoj5m">
            <img src="https://api.iconify.design/lucide-notebook-pen.svg?color=%231f2937" alt="" class="icon-notes" id="iyk1mx" />
            <h3 class="notes-title" id="izudua">Observaciones</h3>
          </div>
          <p class="notes-text" id="i70tbf">${encabezado.observacion}</p>
        </div>
        <div class="gjs-t-border totals-card" id="i6ymib">
          <div class="subtotal-row" id="ibcv9l">
            <span class="subtotal-label" id="ipas13">Subtotal</span>
            <span class="subtotal-value" id="i7yqsd">${totales.subTotal}</span>
          </div>
          <div class="taxes-row" id="i23vcv">
            <span class="taxes-label" id="irkulx">IVA 5%</span>
            <span class="taxes-value" id="iixk1f">${totales.totalIVA5}</span>
          </div>
          <div class="taxes-row" id="i23vcv">
            <span class="taxes-label" id="irkulx">IVA 10%</span>
            <span class="taxes-value" id="iixk1f">${totales.totalIVA10}</span>
          </div>
          <div class="divider" id="if3d3w"></div>
          <div class="total-row" id="izz12m">
            <span class="total-label" id="idxkgj">Total IVA</span>
            <span class="total-value" id="irtpwe">${totales.totalIVA}</span>
          </div>
          <div class="total-row" id="izz12m">
            <span class="total-label" id="idxkgj">Total General</span>
            <span class="total-value" id="irtpwe">${totales.totalGeneral}</span>
          </div>
          <div class="currency-hint" id="itnhmx">
            Expresado en {{encabezado.moneda}}
          </div>
        </div>
      </section>
     ${pagos?.map(pago => `
<section class="gjs-t-border payments-section" id="i8gxnw">
  <div class="payments-header" id="itl263">
    <h2 class="gjs-t-h2 payments-heading" id="i1p7k5">Detalle de Pagos</h2>
    <span class="payments-count" id="iqo5rh">Registros: ${pagos.length}</span>
  </div>
  <div class="payments-list" id="iht4og">
    <div class="payment-item" id="i406cg">
      <div class="payment-left" id="ikyhy2">
        <div class="payment-row" id="ietio8">
          <img src="https://api.iconify.design/lucide-wallet.svg?color=%231f2937" alt="" class="icon-forma-pago" id="i3gmaj" />
          <span class="forma-pago" id="ihnzmi">${pago.forma_pago_nombre}</span>
          <span class="forma-pago-code" id="i943wo">(${pago.forma_pago})</span>
        </div>
        <div class="payment-row" id="i61u1h">
          <img src="https://api.iconify.design/lucide-banknote.svg?color=%231f2937" alt="" class="icon-monto" id="ipl6lh" />
          <span class="monto" id="iaxu6k">${pago.monto}</span>
          <span class="moneda" id="ir4fcg">(${pago.moneda})</span>
        </div>
        <div class="payment-row" id="iuljrh">
          <img src="https://api.iconify.design/lucide-calendar.svg?color=%2364748b" alt="" class="icon-fecha-pago" id="imf8ub" />
          <span id="i5l5n7">${formatearFecha(pago.fecha_pago)}</span>
        </div>
      </div>
      <div class="payment-right" id="iwkbam">
        <span class="cuenta-etiqueta" id="i84zfz">Cuenta</span>
        <span class="cuenta-nombre" id="i9cv8h">${pago.cuenta_nombre}</span>
        <span class="cuenta-id" id="i5x09l">ID ${pago.cuenta_id}</span>
        <div class="divider" id="i9tniq"></div>
        <span class="banco-etiqueta" id="iw43cy">Banco</span>
        <span class="banco" id="i8xodt">${pago.banco}</span>
        <span class="cheque-etiqueta" id="iefkui">N.º Cheque</span>
        <span class="cheque" id="ivixbx">${pago.numero_cheque}</span>
      </div>
    </div>
  </div>
</section>
`).join('')}
      </section>
      <section class="footer-note" id="i1wzi9">
        <p id="i5phfo">Gracias por su compra. Esta factura corresponde a ${encabezado.tipo} y fue emitida el ${formatearFecha(encabezado.fecha)}.</p>
      </section>
    </main >
  </body >

</html >
    `;

  const ventana = window.open("", "_blank");
  ventana.document.write(contenido);
}