import miLogo from './logo.png';
import React from "react";
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Image as PDFImage
} from "@react-pdf/renderer";

import {
    formatearFecha,
    formatearNumero,
    formatearSoloFecha
} from "../components/FormatoFV";

export default function FacturaPDF({ factura }) {
    if (!factura?.datosVentaImprimir) return null;

    const { encabezado, detalle = [], pagos = [] } = factura.datosVentaImprimir;
    const { totales } = factura;
    const styles = StyleSheet.create({
        page: {
            padding: 30,
            backgroundColor: '#ffffff',
            fontFamily: 'Helvetica',
            fontSize: 9,
            color: '#1f2937',
        },
        container: {
            border: '2px solid #e5e7eb',
            borderRadius: 16,
            padding: 16,
        },
        // Header
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottom: '1px solid #d1d5db',
            marginBottom: 5,
            paddingBottom: 8,
        },
        logoSection: {
            flexDirection: 'row',
            gap: 12,
        },
        logo: {
            width: 60,
            height: 60,
            objectFit: 'contain',
        },
        companyInfo: {
            justifyContent: 'center',
        },
        companyName: {
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 2,
        },
        headerRight: {
            textAlign: 'right',
            justifyContent: 'center',
        },
        invoiceTitle: {
            fontSize: 14,
            fontWeight: 'bold',
        },
        timbradoInfo: {
    fontSize: 8,
    color: '#4b5563',
    marginTop: 4,
    // Opción 1: Alinea el texto dentro de las etiquetas <Text>
    textAlign: 'right', 
    // Opción 2: Alinea el contenedor <View> hacia la derecha (si lo usas como envoltorio)
    alignItems: 'flex-end', 
    display: 'flex',
    flexDirection: 'column'
},
        // Nota
        noteBox: {
            border: '2px solid #e5e7eb',
            borderRadius: 12,
            padding: 10,
            backgroundColor: '#f9fafb',
            marginBottom: 5,
            fontStyle: 'italic',
            color: '#374151',
        },
        // Cliente & Info
        infoSection: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            border: '2px solid #e5e7eb',
            borderRadius: 12,
            padding: 12,
            backgroundColor: '#f9fafb',
            marginBottom: 5,
        },
        infoColumn: {
            width: '45%',
        },
        bold: {
            fontWeight: 'bold',
        },
        // Estilo de Tablas (Simuladas con Flex)
        table: {
            border: '1px solid #d1d5db',
            borderRadius: 12,
            overflow: 'hidden',
            marginBottom: 5,
        },
        tableHeader: {
            flexDirection: 'row',
            backgroundColor: '#e5e7eb',
            padding: 8,
            fontWeight: 'bold',
        },
        tableRow: {
            flexDirection: 'row',
            borderBottom: '1px solid #e5e7eb',
            padding: 8,
            backgroundColor: '#f9fafb',
        },
        // Celdas de tabla (ajusta anchos)
        colDesc: { width: '35%' },
        colQty: { width: '10%', textAlign: 'right' },
        colPrice: { width: '15%', textAlign: 'right' },
        colTax: { width: '13%', textAlign: 'right' },

        // Totales y Pagos
        bottomSection: {
            flexDirection: 'row',
            gap: 10,
        },
        paymentTable: {
            width: '60%',
            border: '1px solid #d1d5db',
            borderRadius: 12,
            overflow: 'hidden',
        },
        totalsTable: {
            width: '40%',
            border: '1px solid #d1d5db',
            borderRadius: 12,
            overflow: 'hidden',
        },
        totalRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 8,
            borderBottom: '1px solid #d1d5db',
        },
        grandTotal: {
            backgroundColor: '#e5e7eb',
            fontWeight: 'bold',
            fontSize: 11,
        },
        footer: {
            textAlign: 'center',
            border: '2px solid #e5e7eb',
            borderRadius: 12,
            fontSize: 8,
            padding: 6,
            marginTop: 10,
        }
    });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.container}>

                    {/* HEADER */}
                    <View style={styles.header}>
                        <View style={styles.logoSection}>
                            <PDFImage
                                style={styles.logo}
                                src={miLogo}
                            />
                            <View style={styles.companyInfo}>
                                <Text style={styles.companyName}>H&Y Technology</Text>
                                <Text>De: Anderson Pott Marafon</Text>
                                <Text>RUC: 6930017</Text>
                                <Text>Dirección: Santa Rita, Alto Paraná, Paraguay</Text>
                                <Text>Tél: 0982 771 774</Text>
                                <Text>E-mail: anderpott33@gmail.com</Text>
                            </View>
                        </View>

                        <View style={styles.headerRight}>
                            <Text style={styles.invoiceTitle}>
                                {encabezado.tipo === "VENTA" ? "FACTURA" : encabezado.tipo} Nº: {encabezado.numero_factura}
                            </Text>
                            <View style={styles.timbradoInfo}>
                            {encabezado.referencia_id > 0 && (
                                <Text style={{ fontSize: 8 }}>Comp. Venta: {encabezado.factura_vinculada}</Text>
                            )}
                                <Text>Timbrado: {encabezado.timbrado}</Text>
                                <Text>Inicio Vigencia: {formatearSoloFecha(encabezado.fecha_inicio)}</Text>
                                <Text>Fin Vigencia: {formatearSoloFecha(encabezado.fecha_fin)}</Text>
                            </View>
                        </View>
                    </View>

                    {/* NOTA */}
                    <View style={styles.noteBox}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, alias quos.
                            Numquam iste optio placeat quia earum.
                        </Text>
                    </View>

                    {/* CLIENTE INFO */}
                    <View style={styles.infoSection}>
                        <View style={styles.infoColumn}>
                            <Text><Text style={styles.bold}>Fecha Emisión:</Text> {formatearFecha(encabezado.fecha)}</Text>
                            <Text><Text style={styles.bold}>Cliente:</Text> {encabezado.cliente_id} - {encabezado.cliente_nombre}</Text>
                            <Text><Text style={styles.bold}>Dirección:</Text> {encabezado?.direccion || "--"}</Text>
                            <Text><Text style={styles.bold}>E-mail:</Text> {encabezado?.email || "--"}</Text>
                        </View>
                        <View style={styles.infoColumn}>
                            <Text><Text style={styles.bold}>RUC:</Text> {encabezado.ruc}</Text>
                            <Text><Text style={styles.bold}>Tel:</Text> {encabezado?.telefono || "--"}</Text>
                            <Text><Text style={styles.bold}>Condición:</Text> {encabezado.condicion_pago}</Text>
                        </View>
                    </View>

                    {/* DETALLES ITENES */}
                    <View style={styles.table}>
                        <View style={styles.tableHeader}>
                            <Text style={styles.colDesc}>Descripción</Text>
                            <Text style={styles.colQty}>Cant.</Text>
                            <Text style={styles.colPrice}>P. Unit</Text>
                            <Text style={styles.colTax}>Exento</Text>
                            <Text style={styles.colTax}>5%</Text>
                            <Text style={styles.colTax}>10%</Text>
                        </View>
                        {detalle.map((d, i) => (
                            <View key={i} style={styles.tableRow}>
                                <Text style={styles.colDesc}>{d.producto_id} - {d.producto_nombre}</Text>
                                <Text style={styles.colQty}>{d.cantidad}</Text>
                                <Text style={styles.colPrice}>{formatearNumero(d.precio_unitario)}</Text>
                                <Text style={styles.colTax}>{d.impuesto_por === 'EXENTO' ? formatearNumero(d.total) : "-"}</Text>
                                <Text style={styles.colTax}>{d.impuesto_por === '5%' ? formatearNumero(d.total) : "-"}</Text>
                                <Text style={styles.colTax}>{d.impuesto_por === '10%' ? formatearNumero(d.total) : "-"}</Text>
                            </View>
                        ))}
                    </View>

                    {/* SECCION INFERIOR: PAGOS Y TOTALES */}
                    <View style={styles.bottomSection}>
                        {/* TABLA PAGOS */}
                        <View style={styles.paymentTable}>
                            <View style={styles.tableHeader}>
                                <Text style={{ width: '30%' }}>Forma Pago</Text>
                                <Text style={{ width: '40%' }}>Cuenta</Text>
                                <Text style={{ width: '30%', textAlign: 'right' }}>Valor</Text>
                            </View>
                            {pagos.map((p, i) => (
                                <View key={i} style={styles.tableRow}>
                                    <Text style={{ width: '30%' }}>{p.forma_pago}</Text>
                                    <Text style={{ width: '40%' }}>{p.cuenta_nombre}</Text>
                                    <Text style={{ width: '30%', textAlign: 'right' }}>{formatearNumero(p.monto)}</Text>
                                </View>
                            ))}
                            <View style={{ padding: 8 }}><Text style={{ fontStyle: 'italic' }}>Observaciones:</Text></View>
                        </View>

                        {/* TABLA TOTALES */}
                        <View style={styles.totalsTable}>
                            <View style={styles.totalRow}>
                                <Text style={styles.bold}>Subtotal:</Text>
                                <Text>{formatearNumero(totales.subTotal)}</Text>
                            </View>
                            <View style={styles.totalRow}>
                                <Text style={styles.bold}>IVA (5%):</Text>
                                <Text>{formatearNumero(totales.totalIVA5)}</Text>
                            </View>
                            <View style={styles.totalRow}>
                                <Text style={styles.bold}>IVA (10%):</Text>
                                <Text>{formatearNumero(totales.totalIVA10)}</Text>
                            </View>
                            <View style={styles.totalRow}>
                                <Text style={styles.bold}>Total IVA:</Text>
                                <Text>{formatearNumero(totales.totalIVA)}</Text>
                            </View>
                            <View style={[styles.totalRow, styles.grandTotal]}>
                                <Text>TOTAL:</Text>
                                <Text>{formatearNumero(totales.totalGeneral)}</Text>
                            </View>
                        </View>
                    </View>

                    {/* FOOTER */}
                    <View style={styles.footer}>
                        <Text>Gracias por la preferencia</Text>
                    </View>

                </View>
            </Page>
        </Document>
    );
}