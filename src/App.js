import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Download, FileText, Calendar, Users, Code, Database, Cloud, Shield, CheckCircle, AlertCircle, Layers, GitBranch, DollarSign, MapPin } from 'lucide-react';

const PropuestaObservatorio = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [currentPage, setCurrentPage] = useState('portada');

  // Configuración del proyecto
  const duracionMeses = 2;
  const horasDiarias = 3;
  const diasLaborables = 22;
  const totalHoras = duracionMeses * horasDiarias * diasLaborables;
  
  // Tarifas OPTIMIZADAS
  const tarifaDevSenior = 38;
  const tarifaDevMid = 28;
  const tarifaDesignUX = 30;
  const tarifaQA = 24;
  const tarifaPM = 32;

  // Distribución de horas por rol
  const horasDevSenior = totalHoras * 0.35;
  const horasDevMid = totalHoras * 0.40;
  const horasDesignUX = totalHoras * 0.10;
  const horasQA = totalHoras * 0.10;
  const horasPM = totalHoras * 0.05;

  // Costos de desarrollo
  const costoDevSenior = horasDevSenior * tarifaDevSenior;
  const costoDevMid = horasDevMid * tarifaDevMid;
  const costoDesignUX = horasDesignUX * tarifaDesignUX;
  const costoQA = horasQA * tarifaQA;
  const costoPM = horasPM * tarifaPM;
  const totalDesarrollo = costoDevSenior + costoDevMid + costoDesignUX + costoQA + costoPM;

  // Infraestructura Cloud OPTIMIZADA
  const costosCloud = {
    servidor: 30,
    baseDatos: 20,
    almacenamiento: 12,
    cdn: 8,
    backup: 7,
    dominio: 10,
    total: 87
  };

  // Servicios de terceros OPTIMIZADOS
  const serviciosTerceros = {
    mapas: 0,
    email: 8,
    monitoring: 12,
    analytics: 0,
    total: 20
  };

  // Costos únicos
  const costosUnicos = {
    repositorio: 0,
    ci_cd: 0,
    herramientasGIS: 0,
    certificadosSSL: 0,
    documentacion: 600,
    capacitacion: 700,
    total: 1300
  };

  // Cálculo de subtotales
  const subtotalDesarrollo = totalDesarrollo;
  const subtotalInfraestructura = (costosCloud.total + serviciosTerceros.total) * duracionMeses;
  const subtotalUnicos = costosUnicos.total;
  const contingencia = (subtotalDesarrollo + subtotalInfraestructura + subtotalUnicos) * 0.05;
  const totalGeneral = subtotalDesarrollo + subtotalInfraestructura + subtotalUnicos + contingencia;

  // Estructura de pagos según TDR
  const pagos = [
    { fase: "Plan de desarrollo y arquitectura", porcentaje: 20, monto: totalGeneral * 0.20 },
    { fase: "Plataforma web (versión beta)", porcentaje: 30, monto: totalGeneral * 0.30 },
    { fase: "Geovisor operativo (versión beta)", porcentaje: 30, monto: totalGeneral * 0.30 },
    { fase: "Entrega final y documentación", porcentaje: 20, monto: totalGeneral * 0.20 }
  ];

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const Section = ({ id, title, icon: Icon, children }) => {
    const isExpanded = expandedSections[id] !== false;
    
    return (
      <div className="mb-6 bg-white rounded-lg shadow-lg overflow-hidden break-inside-avoid">
        <button
          onClick={() => toggleSection(id)}
          className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition"
        >
          <div className="flex items-center gap-3">
            {Icon && <Icon className="text-green-600" size={28} />}
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          </div>
          {isExpanded ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
        </button>
        {isExpanded && (
          <div className="p-6 pt-0 border-t">
            {children}
          </div>
        )}
      </div>
    );
  };

  const navigation = [
    { id: 'portada', label: 'Portada' },
    { id: 'ejecutivo', label: 'Resumen Ejecutivo' },
    { id: 'contexto', label: 'Contexto' },
    { id: 'propuesta', label: 'Propuesta Técnica' },
    { id: 'cronograma', label: 'Cronograma' },
    { id: 'cotizacion', label: 'Cotización' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navigation */}
      <div className="bg-white shadow-md sticky top-0 z-50 print:hidden">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 overflow-x-auto">
              {navigation.map(nav => (
                <button
                  key={nav.id}
                  onClick={() => setCurrentPage(nav.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition whitespace-nowrap ${
                    currentPage === nav.id
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {nav.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => window.print()}
              className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
            >
              <Download size={18} />
              <span className="hidden sm:inline">PDF</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* PORTADA */}
        {currentPage === 'portada' && (
          <div className="bg-white rounded-lg shadow-2xl p-12 min-h-screen flex flex-col justify-center items-center text-center break-inside-avoid">
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Layers className="text-white" size={64} />
              </div>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              PROPUESTA TÉCNICA
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8"></div>
            
            <h2 className="text-3xl font-semibold text-green-600 mb-6">
              Desarrollo de Plataforma Web y Geovisor
            </h2>
            
            <h3 className="text-2xl text-gray-700 mb-12">
              Observatorio Socioambiental<br/>
              Charagua Iyambae
            </h3>

            <div className="grid grid-cols-2 gap-8 mb-12 text-left max-w-2xl">
              <div>
                <p className="text-sm text-gray-500 mb-1">Cliente</p>
                <p className="font-semibold text-gray-800">Fundación Natura Bolivia</p>
                <p className="text-sm text-gray-600">GAIOC Charagua Iyambae</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Fecha</p>
                <p className="font-semibold text-gray-800">
                  {new Date().toLocaleDateString('es-ES', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Duración</p>
                <p className="font-semibold text-gray-800">2 meses</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Inversión</p>
                <p className="font-semibold text-green-600 text-xl">
                  ${totalGeneral.toLocaleString('en-US', { minimumFractionDigits: 2 })} USD
                </p>
              </div>
            </div>

            <div className="border-t pt-8 mt-8">
              <p className="text-gray-600 mb-2">Propuesta presentada por:</p>
              <p className="font-semibold text-gray-800 text-lg">[Nombre de la Empresa]</p>
              <p className="text-gray-600">Desarrollo de Software & Soluciones GIS</p>
            </div>
          </div>
        )}

        {/* RESUMEN EJECUTIVO */}
        {currentPage === 'ejecutivo' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-8 break-inside-avoid">
              <h1 className="text-4xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <FileText className="text-green-600" size={36} />
                Resumen Ejecutivo
              </h1>
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  La presente propuesta tiene como objetivo desarrollar e implementar el <strong>Observatorio 
                  Socioambiental de Charagua Iyambae</strong>, una plataforma web integral que integra un 
                  geovisor avanzado para el monitoreo, gestión y transparencia de información socioambiental 
                  del territorio indígena guaraní.
                </p>

                <div className="grid grid-cols-3 gap-6 my-8">
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                    <Calendar className="text-green-600 mb-3" size={32} />
                    <p className="text-sm text-gray-600 mb-1">Duración</p>
                    <p className="text-2xl font-bold text-green-700">{duracionMeses} meses</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <Users className="text-blue-600 mb-3" size={32} />
                    <p className="text-sm text-gray-600 mb-1">Equipo</p>
                    <p className="text-2xl font-bold text-blue-700">5 especialistas</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                    <Code className="text-purple-600 mb-3" size={32} />
                    <p className="text-sm text-gray-600 mb-1">Dedicación</p>
                    <p className="text-2xl font-bold text-purple-700">{totalHoras} horas</p>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-6 mt-8 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-3 text-lg">
                    Inversión Total: ${totalGeneral.toLocaleString('en-US', { minimumFractionDigits: 2 })} USD
                  </h4>
                  <p className="text-green-700">
                    Esta inversión incluye desarrollo completo, infraestructura por 2 meses, 
                    documentación técnica, capacitación y soporte post-lanzamiento. Costo de 
                    mantenimiento posterior: aproximadamente ${costosCloud.total + serviciosTerceros.total}/mes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CONTEXTO - Mantengo el contenido existente */}
        {currentPage === 'contexto' && (
          <div className="space-y-6">
            <Section id="antecedentes" title="Antecedentes y Contexto" icon={FileText}>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Fundación Natura Bolivia, en coordinación con el Gobierno Autónomo Indígena 
                  Originario Campesino (GAIOC) Charagua Iyambae, impulsa la creación del Observatorio 
                  Socioambiental como un sistema integral de información, transparencia y monitoreo 
                  ambiental del territorio.
                </p>
              </div>
            </Section>
          </div>
        )}

        {/* PROPUESTA TÉCNICA - Mantengo el contenido existente */}
        {currentPage === 'propuesta' && (
          <div className="space-y-6">
            <Section id="stack" title="Stack Tecnológico" icon={Code}>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mt-6">
                <h4 className="font-bold text-green-800 mb-3">🆓 Software Libre al 100%</h4>
                <div className="grid grid-cols-2 gap-4 text-sm text-green-700">
                  <div>✓ Sin costos de licenciamiento</div>
                  <div>✓ Cumplimiento D.S. 3251</div>
                  <div>✓ Comunidad activa</div>
                  <div>✓ Soberanía tecnológica</div>
                </div>
              </div>
            </Section>
          </div>
        )}

        {/* CRONOGRAMA */}
        {currentPage === 'cronograma' && (
          <div className="space-y-6">
            <Section id="cronograma-detallado" title="Cronograma de Ejecución" icon={Calendar}>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-800 mb-3">Duración Total: {duracionMeses} Meses (8 semanas)</h4>
                  <p className="text-blue-700">
                    El proyecto se ejecutará con dedicación de {horasDiarias} horas diarias, totalizando {totalHoras} horas 
                    de desarrollo distribuidas estratégicamente en 4 fases.
                  </p>
                </div>
              </div>
            </Section>
          </div>
        )}

        {/* COTIZACIÓN */}
        {currentPage === 'cotizacion' && (
          <div className="space-y-6">
            <Section id="cotizacion-completa" title="Cotización Detallada" icon={DollarSign}>
              <div className="space-y-6">
                {/* Resumen */}
                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-lg">
                  <div className="text-center">
                    <p className="text-xl mb-2">Inversión Total del Proyecto</p>
                    <p className="text-5xl font-bold mb-2">
                      ${totalGeneral.toLocaleString('en-US', { minimumFractionDigits: 2 })} USD
                    </p>
                    <p className="text-sm opacity-90">Incluye desarrollo, infraestructura (2 meses), capacitación y soporte</p>
                  </div>
                </div>

                {/* Desglose */}
                <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-4 text-lg">Desglose de Costos</h4>
                  
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="text-left p-3">Concepto</th>
                        <th className="text-right p-3">Cantidad</th>
                        <th className="text-right p-3">Precio Unit.</th>
                        <th className="text-right p-3">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3">
                          <strong>Desarrollo - Dev Senior (GIS)</strong>
                          <p className="text-xs text-gray-600">{horasDevSenior.toFixed(0)} horas × ${tarifaDevSenior}/h</p>
                        </td>
                        <td className="text-right p-3">{horasDevSenior.toFixed(0)}h</td>
                        <td className="text-right p-3">${tarifaDevSenior}</td>
                        <td className="text-right p-3 font-semibold">${costoDevSenior.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">
                          <strong>Desarrollo - Dev Mid-Level</strong>
                          <p className="text-xs text-gray-600">{horasDevMid.toFixed(0)} horas × ${tarifaDevMid}/h</p>
                        </td>
                        <td className="text-right p-3">{horasDevMid.toFixed(0)}h</td>
                        <td className="text-right p-3">${tarifaDevMid}</td>
                        <td className="text-right p-3 font-semibold">${costoDevMid.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">
                          <strong>Diseño UX/UI</strong>
                          <p className="text-xs text-gray-600">{horasDesignUX.toFixed(0)} horas × ${tarifaDesignUX}/h</p>
                        </td>
                        <td className="text-right p-3">{horasDesignUX.toFixed(0)}h</td>
                        <td className="text-right p-3">${tarifaDesignUX}</td>
                        <td className="text-right p-3 font-semibold">${costoDesignUX.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">
                          <strong>QA Testing</strong>
                          <p className="text-xs text-gray-600">{horasQA.toFixed(0)} horas × ${tarifaQA}/h</p>
                        </td>
                        <td className="text-right p-3">{horasQA.toFixed(0)}h</td>
                        <td className="text-right p-3">${tarifaQA}</td>
                        <td className="text-right p-3 font-semibold">${costoQA.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">
                          <strong>Project Management</strong>
                          <p className="text-xs text-gray-600">{horasPM.toFixed(0)} horas × ${tarifaPM}/h</p>
                        </td>
                        <td className="text-right p-3">{horasPM.toFixed(0)}h</td>
                        <td className="text-right p-3">${tarifaPM}</td>
                        <td className="text-right p-3 font-semibold">${costoPM.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                      </tr>
                      <tr className="bg-green-50 font-bold">
                        <td className="p-3" colSpan="3">Subtotal Desarrollo</td>
                        <td className="text-right p-3 text-green-700">${subtotalDesarrollo.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">
                          <strong>Infraestructura Cloud</strong>
                          <p className="text-xs text-gray-600">Servidor, BD, Storage, CDN ({duracionMeses} meses)</p>
                        </td>
                        <td className="text-right p-3">{duracionMeses} meses</td>
                        <td className="text-right p-3">${costosCloud.total}</td>
                        <td className="text-right p-3 font-semibold">${(costosCloud.total * duracionMeses).toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">
                          <strong>Servicios de Terceros</strong>
                          <p className="text-xs text-gray-600">Email, Monitoring ({duracionMeses} meses)</p>
                        </td>
                        <td className="text-right p-3">{duracionMeses} meses</td>
                        <td className="text-right p-3">${serviciosTerceros.total}</td>
                        <td className="text-right p-3 font-semibold">${(serviciosTerceros.total * duracionMeses).toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                      </tr>
                      <tr className="bg-blue-50 font-bold">
                        <td className="p-3" colSpan="3">Subtotal Infraestructura ({duracionMeses} meses)</td>
                        <td className="text-right p-3 text-blue-700">${subtotalInfraestructura.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">
                          <strong>Documentación Técnica</strong>
                          <p className="text-xs text-gray-600">Manuales y guías completas</p>
                        </td>
                        <td className="text-right p-3">-</td>
                        <td className="text-right p-3">-</td>
                        <td className="text-right p-3 font-semibold">${costosUnicos.documentacion.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">
                          <strong>Capacitación</strong>
                          <p className="text-xs text-gray-600">Formación del equipo administrador</p>
                        </td>
                        <td className="text-right p-3">-</td>
                        <td className="text-right p-3">-</td>
                        <td className="text-right p-3 font-semibold">${costosUnicos.capacitacion.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                      </tr>
                      <tr className="bg-purple-50 font-bold">
                        <td className="p-3" colSpan="3">Subtotal Costos Únicos</td>
                        <td className="text-right p-3 text-purple-700">${subtotalUnicos.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">
                          <strong>Contingencia (5%)</strong>
                          <p className="text-xs text-gray-600">Imprevistos y ajustes</p>
                        </td>
                        <td className="text-right p-3">-</td>
                        <td className="text-right p-3">-</td>
                        <td className="text-right p-3 font-semibold">${contingencia.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                      </tr>
                      <tr className="bg-gradient-to-r from-green-100 to-blue-100 font-bold text-lg">
                        <td className="p-4" colSpan="3">TOTAL GENERAL (USD)</td>
                        <td className="text-right p-4 text-green-700">${totalGeneral.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Estructura de Pagos */}
                <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-4 text-lg">Estructura de Pagos (Según TDR)</h4>
                  
                  <div className="space-y-3">
                    {pagos.map((pago, idx) => (
                      <div key={idx} className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-gray-200">
                        <div>
                          <p className="font-semibold text-gray-800">Pago {idx + 1}: {pago.fase}</p>
                          <p className="text-sm text-gray-600">{pago.porcentaje}% del total</p>
                        </div>
                        <p className="text-2xl font-bold text-green-600">
                          ${pago.monto.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Costos Post-Proyecto */}
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-bold text-yellow-800 mb-3">Costos de Mantenimiento Post-Proyecto</h4>
                  <p className="text-sm text-yellow-700 mb-3">
                    Después de los {duracionMeses} meses de desarrollo (que incluyen 3 meses de soporte gratuito), 
                    los costos recurrentes mensuales estimados son:
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white p-3 rounded">
                      <p className="font-semibold text-gray-800">Infraestructura Cloud</p>
                      <p className="text-gray-600">~${costosCloud.total}/mes</p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <p className="font-semibold text-gray-800">Servicios de Terceros</p>
                      <p className="text-gray-600">~${serviciosTerceros.total}/mes</p>
                    </div>
                  </div>
                  <p className="mt-3 font-bold text-yellow-800">
                    Total estimado: ~${costosCloud.total + serviciosTerceros.total}/mes
                  </p>
                </div>
              </div>
            </Section>
          </div>
        )}
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          .print\\:hidden { display: none !important; }
          .break-inside-avoid { break-inside: avoid; page-break-inside: avoid; }
          @page { margin: 1.5cm; size: A4; }
          .shadow-lg, .shadow-md, .shadow-2xl { box-shadow: none !important; }
        }
      `}</style>
    </div>
  );
};

export default PropuestaObservatorio;