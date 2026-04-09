// src/impresion/ImpresionMovimientos.js
import { formatearFecha, formatearNumero, formatearSoloFecha } from "../components/FormatoFV";

export default function imprimirFactura(factura) {
  if (!factura) return;
  const { encabezado, detalle, pagos } = factura.datosVentaImprimir
  const { totales } = factura;

  const contenido = `
     <!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Factura A4</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        @page {
            size: A4;
            margin: 2mm;
        }

        tr {
            page-break-inside: avoid;
        }

        body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            background-color: #ffffff;
            color: #1f2937; /* text-gray-900 */
            margin: 0;
            font-family: sans-serif;
        }
    </style>
</head>

<body>

    <div style="margin-left:auto;margin-right:auto;padding:16px;">

        <div style="border:2px solid #e5e7eb;padding:16px;border-radius:1rem;box-shadow:0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);">
            <!-- Header -->
            <header style="display:flex;justify-content:space-between;padding:8px;border-bottom:1px solid #d1d5db;margin-bottom:16px;">
                <div style="display:flex;gap:12px;">
                    <div style="width:96px;height:96px;display:flex;justify-content:center;align-items:center;">
                        <img src="https://cdn.grapesjs.com/workspaces/cmnq3iawc16jb4lmutiz1o9gy/assets/c051235c-a435-4db8-ac0b-8e9be998d074__favicon.svg" alt="Logo" style="width:100%;height:100%;object-fit:contain;" />
                    </div>
                    <div style="display:flex;flex-direction:column;justify-content:center;">
                        <h1 style="font-size:1.5rem;font-weight:bold;margin:0;">H&Y Technology</h1>
                        <span style="font-size:0.75rem;"><b>De: </b>Anderson Pott Marafon</span>
                        <span style="font-size:0.75rem;"><b>RUC: </b>6930017</span>
                        <span style="font-size:0.75rem;"><b>Dirección: </b>Santa Rita, Alto Paraná, Paraguay</span>
                        <span style="font-size:0.75rem;"><b>Tél: </b>0982 771 774</span>
                        <span style="font-size:0.75rem;"><b>E-mail: </b>anderpott33@gmail.com</span>
                    </div>
                </div>
                <div style="text-align:right;display:flex;flex-direction:column;justify-content:center;">
                    <div>
                        <span style="font-weight:600;font-size:1.25rem;">${encabezado.tipo === "VENTA" ? "FACTURA" : encabezado.tipo} Nº:</span>
                        <span style="font-size:1.25rem;">${encabezado.numero_factura}</span>
                        </div>
                        <div>
                        ${encabezado.referencia_id > 0 ? `<span><b>Comprobante Venta:</b> <span style="font-size:0.80rem;">${encabezado.factura_vinculada}</span></span>` : ""}
                        </div>
                    <div style="display:flex;flex-direction:column;font-size:0.75rem;color:#4b5563;">
                        <span><b>Timbrado:</b> ${encabezado.timbrado}</span>
                        <span><b>Inicio Vigencia:</b> ${formatearSoloFecha(encabezado.fecha_inicio)}</span>
                        <span><b>Fin Vigencia:</b> ${formatearSoloFecha(encabezado.fecha_fin)}</span>
                       
                    </div>
                </div>
            </header>

            <!-- Nota -->
            <div style="border:2px solid #e5e7eb;border-radius:1rem;margin-bottom:16px;padding:12px;background-color:#f9fafb;">
                <span style="font-style:italic;font-size:0.875rem;color:#374151;">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, alias quos. Numquam iste optio
                    placeat quia earum, quibusdam possimus totam autem ullam ipsum aut aliquid mollitia accusantium
                    nostrum minus. Tempore?
                </span>
            </div>

            <!-- Cliente & Factura Info -->
            <div style="display:flex;justify-content:space-between;margin-bottom:16px;border:2px solid #e5e7eb;border-radius:1rem;padding:12px;background-color:#f9fafb;">
                <div style="width:50%;display:flex;flex-direction:column;gap:4px;">
                 <span><b>Fecha Emisión:</b> ${formatearFecha(encabezado.fecha)}</span>    
                <span><b>Cliente: </b>${`${encabezado.cliente_id} - ${encabezado.cliente_nombre}`}</span>
                    <span><b>Dirección: </b>${encabezado?.direccion || "--"}</span>
                    <span><b>E-mail: </b>${encabezado?.email || "--"}</span>
                </div>
                <div style="width:33.33%;display:flex;flex-direction:column;gap:4px;text-align:left;font-size:0.875rem;">
                    <span><b>RUC: </b>${encabezado.ruc}</span>
                    <span><b>Tel: </b>${encabezado?.telefono || "--"}</span>
                    <span><b>Condición: </b>${encabezado.condicion_pago}</span>
                </div>
            </div>

            <!-- DETALLES ITENES -->
            <div style="border:1px solid #d1d5db;border-radius:1rem;overflow:hidden;box-shadow:inset 0 1px 2px rgba(0,0,0,0.05);margin-bottom:16px;">
                <div style="width:100%;border:1px solid #d1d5db;border-radius:1rem;overflow:hidden;box-shadow:inset 0 1px 2px rgba(0,0,0,0.05);">
                    <table style="width:100%;border-collapse:collapse;">
                        <thead style="background-color:#e5e7eb;">
                            <tr>
                                <th style="padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #bfdbfe;">Descripción</th>
                                <th style="padding:16px;text-align:right;font-weight:600;border-bottom:1px solid #bfdbfe;">Cantidad</th>
                                <th style="padding:16px;text-align:right;font-weight:600;border-bottom:1px solid #bfdbfe;">Precio Unitario</th>
                                <th style="padding:16px;text-align:right;font-weight:600;border-bottom:1px solid #bfdbfe;">Exento</th>
                                <th style="padding:16px;text-align:right;font-weight:600;border-bottom:1px solid #bfdbfe;">Subtotal 5%</th>
                                <th style="padding:16px;text-align:right;font-weight:600;border-bottom:1px solid #bfdbfe;">Subtotal 10%</th>
                            </tr>
                        </thead>
                        <tbody style="color:#1f2937;">
                        ${detalle.map(d=> `
                            <tr style="background-color:#f9fafb;">
                                <td style="padding:16px;border-bottom:1px solid #e5e7eb;">${`${d.producto_id} - ${d.producto_nombre}`}</td>
                                <td style="padding:16px;text-align:right;border-bottom:1px solid #e5e7eb;">${d.cantidad}</td>
                                <td style="padding:16px;text-align:right;border-bottom:1px solid #e5e7eb;">${formatearNumero(d.precio_unitario)}</td>
                                <td style="padding:16px;text-align:right;border-bottom:1px solid #e5e7eb;">${d.impuesto_por === 'EXENTO' ? formatearNumero(d.total) : "-"}</td>
                                <td style="padding:16px;text-align:right;border-bottom:1px solid #e5e7eb;">${d.impuesto_por === '5%' ? formatearNumero(d.total) : "-"}</td>
                                <td style="padding:16px;text-align:right;border-bottom:1px solid #e5e7eb;">${d.impuesto_por === '10%' ? formatearNumero(d.total) : "-"}</td>
                            </tr>
                          `).join('')}
                        </tbody>
                    </table>
                </div>

                <!-- TOTALES -->
                <div style="display:flex;gap:4px;justify-content:flex-end;margin-top:4px;">
                    <!-- PAGO -->
                    <div style="width:100%;border:1px solid #d1d5db;border-radius:1rem;overflow:hidden;box-shadow:inset 0 1px 2px rgba(0,0,0,0.05);">
                        <table style="width:100%;border-collapse:collapse;">
                            <thead style="background-color:#e5e7eb;">
                                <tr>
                                    <th style="padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #bfdbfe;">Forma Pago</th>
                                    <th style="padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #bfdbfe;">Cuenta</th>
                                    <th style="padding:16px;text-align:right;font-weight:600;border-bottom:1px solid #bfdbfe;">Valor</th>
                                </tr>
                            </thead>
                            <tbody style="color:#1f2937;">
                            ${pagos.map(p=> `
                                <tr style="background-color:#f9fafb;">
                                    <td style="padding:16px;border-bottom:1px solid #e5e7eb;">${p.forma_pago}</td>
                                    <td style="padding:16px;text-align:left;border-bottom:1px solid #e5e7eb;">${p.cuenta_nombre}</td>
                                    <td style="padding:16px;text-align:right;border-bottom:1px solid #e5e7eb;">${formatearNumero(p.monto)}</td>
                                </tr>
                                `).join('')}
                            </tbody>
                        </table>
                        <div style="padding:8px;font-style:italic;"><b>Observaciones:</b></div>
                    </div>

                    <div style="width:50%;border:1px solid #d1d5db;border-radius:1rem;overflow:hidden;box-shadow:inset 0 1px 2px rgba(0,0,0,0.05);">
                        <table style="width:100%;border-collapse:collapse;text-align:right;">
                            <tbody>
                                <tr style="background-color:#e5e7eb;">
                                    <th style="padding:16px;font-weight:600;color:#374151;">Subtotal:</th>
                                    <td style="padding:16px;">${formatearNumero(totales.subTotal)}</td>
                                </tr>
                                <tr style="background-color:#f9fafb;">
                                    <th style="padding:16px;font-weight:600;color:#374151;">IVA (5%):</th>
                                    <td style="padding:16px;">${formatearNumero(totales.totalIVA5)}</td>
                                </tr>
                                <tr style="background-color:#e5e7eb;">
                                    <th style="padding:16px;font-weight:600;color:#374151;">IVA (10%):</th>
                                    <td style="padding:16px;">${formatearNumero(totales.totalIVA10)}</td>
                                </tr>
                                <tr style="background-color:#f9fafb;border-top:1px solid #d1d5db;">
                                    <th style="padding:16px;font-weight:600;color:#374151;">Total IVA:</th>
                                    <td style="padding:16px;">${formatearNumero(totales.totalIVA)}</td>
                                </tr>
                                <tr style="background-color:#e5e7eb;font-weight:bold;font-size:1.125rem;border-top:1px solid #9ca3af;">
                                    <th style="padding:16px;">Total:</th>
                                    <td style="padding:16px;">${formatearNumero(totales.totalGeneral)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            <!-- Footer -->
            <footer style="text-align:center;border:2px solid #e5e7eb;border-radius:1rem;font-size:0.75rem;padding:8px;">
                Gracias por la preferencia
            </footer>
        </div>

    </div>

</body>

</html>
    `;

  const ventana = window.open("", "_blank");
  ventana.document.write(contenido);
}




/* 
<section class="gjs-t-border seller-and-client-card" id="il2vp">
        <div class="two-columns" id="ibz1m">
          <div class="seller-block" id="iyxae">
            <h2 class="gjs-t-h2 seller-heading" id="iop7p">Emisor</h2>
            <div class="divider" id="ixgy5"></div>
            <div class="seller-fields" id="it0gf">
              <div class="seller-item" id="itall">
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
*/


/*  <section class="gjs-t-border items-section" id="ittkqc">
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
</section> */