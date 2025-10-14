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
              <p className="font-semibold text-gray-800 text-lg">MSc.Ing, Manuel Saavedra</p>
              <p className="text-gray-600">NSoft Solutions</p>
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
                    de desarrollo distribuidas estratégicamente en 4 fases con entregables específicos.
                  </p>
                </div>

                {/* HITO 1 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-200">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">HITO 1: Planificación y Arquitectura Técnica</h3>
                        <p className="text-blue-100">Semanas 1-2 | 26 horas | 20% del pago</p>
                      </div>
                      <div className="bg-white text-blue-600 px-4 py-2 rounded-lg font-bold">
                        ${(totalGeneral * 0.20).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="font-bold text-gray-800 mb-4 text-lg">Objetivos del Hito</h4>
                    <p className="text-gray-600 mb-6">
                      Establecer la base técnica del proyecto mediante el análisis detallado de requerimientos,
                      diseño de arquitectura del sistema y configuración del entorno de desarrollo completo.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Code className="text-blue-600" size={20} />
                          Actividades Técnicas
                        </h5>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                            <span><strong>Análisis de requerimientos:</strong> Reuniones con stakeholders, definición de user stories, casos de uso</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                            <span><strong>Diseño de arquitectura:</strong> Diagrama de componentes, flujo de datos, estructura de BD</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                            <span><strong>Modelo de datos:</strong> ERD, esquemas PostgreSQL/PostGIS, índices espaciales</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                            <span><strong>Setup DevOps:</strong> Repositorio Git, CI/CD pipeline, ambientes (dev/staging/prod)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                            <span><strong>Prototipado UI/UX:</strong> Wireframes interactivos, guía de estilos, componentes base</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                            <span><strong>Plan de pruebas:</strong> Estrategia QA, test cases, métricas de calidad</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Database className="text-purple-600" size={20} />
                          Stack Tecnológico Implementado
                        </h5>
                        <div className="space-y-3 text-sm">
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <p className="font-semibold text-blue-800 mb-1">Backend</p>
                            <p className="text-gray-700">Node.js 18+ / Python 3.11+, Express/Django, PostgreSQL 15, PostGIS 3.3</p>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg">
                            <p className="font-semibold text-green-800 mb-1">Frontend</p>
                            <p className="text-gray-700">React 18, Next.js 14, Tailwind CSS 3.4, Leaflet 1.9</p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg">
                            <p className="font-semibold text-purple-800 mb-1">DevOps</p>
                            <p className="text-gray-700">Docker, GitHub Actions, Nginx, Let's Encrypt</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500 mb-6">
                      <h5 className="font-bold text-yellow-800 mb-3">📦 Entregables Específicos</h5>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span><strong>Documento de Arquitectura Técnica</strong> (PDF, 20-30 páginas)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span><strong>Diagramas UML:</strong> Componentes, clases, secuencia, despliegue</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span><strong>Modelo de Base de Datos</strong> con scripts SQL de creación</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span><strong>Wireframes y Mockups</strong> de todas las pantallas (Figma/Adobe XD)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span><strong>Repositorio Git configurado</strong> con estructura de carpetas</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span><strong>Plan de Desarrollo Detallado</strong> con tareas y estimaciones</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span><strong>Guía de Estilos UI/UX</strong> (colores, tipografía, componentes)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span><strong>Plan de Pruebas y QA</strong> con casos de prueba definidos</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                      <h5 className="font-bold text-green-800 mb-3">✅ Criterios de Aceptación</h5>
                      <ul className="space-y-2 text-sm text-green-700">
                        <li>• Documentación técnica completa y aprobada por el cliente</li>
                        <li>• Modelo de base de datos validado con datos de prueba</li>
                        <li>• Prototipos interactivos navegables y aprobados</li>
                        <li>• Repositorio Git operativo con CI/CD básico funcionando</li>
                        <li>• Ambiente de desarrollo configurado y documentado</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* HITO 2 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-200">
                  <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">HITO 2: Desarrollo de Plataforma Web (Beta)</h3>
                        <p className="text-green-100">Semanas 3-4 | 40 horas | 30% del pago</p>
                      </div>
                      <div className="bg-white text-green-600 px-4 py-2 rounded-lg font-bold">
                        ${(totalGeneral * 0.30).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="font-bold text-gray-800 mb-4 text-lg">Objetivos del Hito</h4>
                    <p className="text-gray-600 mb-6">
                      Implementar los módulos principales de la plataforma web con funcionalidad completa de gestión de contenidos,
                      autenticación, biblioteca documental, gaceta oficial y sistema de noticias.
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
                        <h5 className="font-bold text-blue-800 mb-3">🔐 Módulo de Autenticación y Gestión de Usuarios</h5>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Funcionalidades:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• Login/Logout con JWT</li>
                              <li>• Registro de usuarios con validación de email</li>
                              <li>• Recuperación de contraseña</li>
                              <li>• Gestión de perfiles (editar datos, cambiar contraseña)</li>
                              <li>• Sistema de roles: Webmaster, Admin, Operador, Visualizador</li>
                              <li>• Control de permisos por rol (RBAC)</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Tecnologías:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• JWT para tokens de autenticación</li>
                              <li>• Bcrypt para hash de contraseñas</li>
                              <li>• Middleware de autorización</li>
                              <li>• Sesiones con Redis</li>
                              <li>• Validación con Joi/Yup</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded-r-lg">
                        <h5 className="font-bold text-purple-800 mb-3">📚 Módulo de Biblioteca y Repositorio Documental</h5>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Funcionalidades:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• Subida de documentos (PDF, Word, Excel, imágenes)</li>
                              <li>• Categorización por temas: Normativa, Cultura, REDD+, etc.</li>
                              <li>• Sistema de búsqueda avanzada con filtros</li>
                              <li>• Etiquetado y metadatos de documentos</li>
                              <li>• Vista previa de documentos</li>
                              <li>• Control de versiones de documentos</li>
                              <li>• Descarga individual o por lote</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Tecnologías:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• Multer para upload de archivos</li>
                              <li>• S3/MinIO para almacenamiento</li>
                              <li>• PDF.js para preview</li>
                              <li>• Full-text search con PostgreSQL</li>
                              <li>• Elasticsearch (opcional avanzado)</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg">
                        <h5 className="font-bold text-red-800 mb-3">📜 Módulo de Gaceta Oficial</h5>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Funcionalidades:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• Publicación de leyes y normativas</li>
                              <li>• Gestión de reglamentos y acuerdos</li>
                              <li>• Calendario de actividades institucionales</li>
                              <li>• Comunicados oficiales con timestamps</li>
                              <li>• Búsqueda por número, fecha, tipo de norma</li>
                              <li>• Historial de modificaciones</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Base de Datos:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• Tabla: leyes, reglamentos, comunicados</li>
                              <li>• Relaciones con documentos adjuntos</li>
                              <li>• Índices para búsqueda rápida</li>
                              <li>• Auditoría de cambios</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded-r-lg">
                        <h5 className="font-bold text-orange-800 mb-3">📰 Módulo de Noticias y CMS</h5>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Funcionalidades:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• Editor WYSIWYG (rich text editor)</li>
                              <li>• Publicación programada de noticias</li>
                              <li>• Categorías y etiquetas</li>
                              <li>• Galería de imágenes</li>
                              <li>• Comentarios (opcional, moderados)</li>
                              <li>• Compartir en redes sociales</li>
                              <li>• RSS Feed</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Tecnologías:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• TinyMCE o Quill editor</li>
                              <li>• Slugs SEO-friendly</li>
                              <li>• Open Graph meta tags</li>
                              <li>• Optimización de imágenes (Sharp)</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-l-4 border-indigo-500 bg-indigo-50 p-4 rounded-r-lg">
                        <h5 className="font-bold text-indigo-800 mb-3">💬 Módulo de Foro Comunitario</h5>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Funcionalidades:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• Temas de discusión categorizados</li>
                              <li>• Hilos de conversación anidados</li>
                              <li>• Notificaciones de respuestas</li>
                              <li>• Sistema de moderación</li>
                              <li>• Búsqueda en foros</li>
                              <li>• Alertas socioambientales destacadas</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Tecnologías:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• WebSockets para notificaciones real-time</li>
                              <li>• Socket.io o similar</li>
                              <li>• Sistema de reputación</li>
                              <li>• Moderación con flags</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500 mb-6">
                      <h5 className="font-bold text-yellow-800 mb-3">📦 Entregables Específicos</h5>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span>Sistema de autenticación completo y funcional</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span>Panel de administración operativo</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span>Módulo de biblioteca con 50+ documentos de prueba</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span>Gaceta oficial con navegación y búsqueda</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span>Sistema de noticias con editor rich text</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span>Foro comunitario básico funcional</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span>API REST documentada (Swagger/OpenAPI)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span>Suite de tests unitarios (cobertura >70%)</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                      <h5 className="font-bold text-green-800 mb-3">✅ Criterios de Aceptación</h5>
                      <ul className="space-y-2 text-sm text-green-700">
                        <li>• Todos los módulos web operativos sin errores críticos</li>
                        <li>• Usuarios pueden registrarse, login y gestionar perfiles</li>
                        <li>• Documentos se suben, categorizan y descargan correctamente</li>
                        <li>• Sistema de búsqueda retorna resultados relevantes</li>
                        <li>• Diseño responsive funciona en móvil, tablet y desktop</li>
                        <li>• No hay vulnerabilidades de seguridad críticas (OWASP Top 10)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* HITO 3 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-200">
                  <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">HITO 3: Desarrollo del Geovisor GIS (Beta)</h3>
                        <p className="text-emerald-100">Semanas 5-6 | 40 horas | 30% del pago</p>
                      </div>
                      <div className="bg-white text-emerald-600 px-4 py-2 rounded-lg font-bold">
                        ${(totalGeneral * 0.30).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="font-bold text-gray-800 mb-4 text-lg">Objetivos del Hito</h4>
                    <p className="text-gray-600 mb-6">
                      Implementar el núcleo geoespacial del observatorio con capacidades completas de visualización,
                      análisis y monitoreo de datos territoriales, integrado con aplicaciones móviles de campo.
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
                        <h5 className="font-bold text-green-800 mb-3">🗺️ Sistema de Visualización de Mapas Base</h5>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Funcionalidades Core:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• Visor de mapas interactivo (zoom, pan, rotate)</li>
                              <li>• Múltiples capas base (OpenStreetMap, satélite, topográfico)</li>
                              <li>• Switching entre modos 2D/3D (opcional)</li>
                              <li>• Controles de navegación intuitivos</li>
                              <li>• Geocodificación (búsqueda de lugares)</li>
                              <li>• Geolocalización del usuario</li>
                              <li>• Mini-mapa de referencia</li>
                              <li>• Escala gráfica y coordenadas del cursor</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Tecnologías GIS:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• Leaflet.js / OpenLayers como motor</li>
                              <li>• GeoServer para WMS/WFS/WCS</li>
                              <li>• Tiles pre-generados con TileServer</li>
                              <li>• PostGIS para queries espaciales</li>
                              <li>• Turf.js para análisis cliente</li>
                              <li>• GDAL/OGR para conversiones</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-r-lg">
                        <h5 className="font-bold text-yellow-800 mb-3">🌳 Módulo de Deforestación</h5>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Capacidades de Análisis:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• Visualización de áreas deforestadas (polígonos)</li>
                              <li>• Timeline de cambios (2022-presente)</li>
                              <li>• Cálculo automático de superficie afectada</li>
                              <li>• Comparación temporal (antes/después)</li>
                              <li>• Identificación de tipos de deforestación</li>
                              <li>• Generación de alertas por umbrales</li>
                              <li>• Estadísticas por AP, Zona, Comunidad</li>
                              <li>• Exportación de reportes (PDF, Excel, SHP)</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Fuentes de Datos:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• Imágenes Sentinel-2 (10m resolución)</li>
                              <li>• Landsat 8/9 (30m resolución)</li>
                              <li>• Planet Labs (opcional, alta resolución)</li>
                              <li>• Datos de SMART patrols</li>
                              <li>• Autorizaciones de desmonte (GAIOC)</li>
                              <li>• Digitalización manual de polígonos</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg">
                        <h5 className="font-bold text-red-800 mb-3">🔥 Módulo de Incendios</h5>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Monitoreo en Tiempo Real:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• Focos de calor activos (FIRMS/MODIS)</li>
                              <li>• Cicatrices de incendios (NBR, SWIR)</li>
                              <li>• Mapa de calor de densidad de focos</li>
                              <li>• Estado: activos, controlados, liquidados</li>
                              <li>• Análisis de riesgo por vientos y vegetación</li>
                              <li>• Integración con alertas SMART</li>
                              <li>• Notificaciones push a móviles</li>
                              <li>• Dashboard con métricas en vivo</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Reportes Automatizados:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• Boletín diario de incendios</li>
                              <li>• Reportes semanales por comunidad</li>
                              <li>• Informe mensual consolidado</li>
                              <li>• Gráficos de tendencias</li>
                              <li>• Exportación a PDF con mapas</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-l-4 border-teal-500 bg-teal-50 p-4 rounded-r-lg">
                        <h5 className="font-bold text-teal-800 mb-3">🦜 Módulo de Biodiversidad</h5>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Monitoreo de Fauna:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• Puntos de observación (trampas cámara)</li>
                              <li>• Galería fotográfica georreferenciada</li>
                              <li>• Lista de especies registradas</li>
                              <li>• Frecuencia de avistamientos</li>
                              <li>• Rutas de patrullaje (SMART)</li>
                              <li>• Mapa de corredores biológicos</li>
                              <li>• Indicadores de biodiversidad</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Análisis MRV:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• Monitoreo comunitario (formularios móviles)</li>
                              <li>• Verificación de datos</li>
                              <li>• Reportes MRV trimestrales</li>
                              <li>• Integración con SMART Conservation</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
                        <h5 className="font-bold text-blue-800 mb-3">💧 Módulo de Hidrología</h5>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Monitoreo de Agua:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• Puntos de medición de caudales</li>
                              <li>• Calidad del agua (parámetros físico-químicos)</li>
                              <li>• Red hidrográfica (ríos, arroyos)</li>
                              <li>• Gráficos de tendencias temporales</li>
                              <li>• Alertas por umbrales (sequía, contaminación)</li>
                              <li>• Integración con estaciones meteorológicas</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Captura de Datos:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• App móvil para registro en campo</li>
                              <li>• Formularios personalizados</li>
                              <li>• Fotos georreferenciadas</li>
                              <li>• Sincronización automática</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded-r-lg">
                        <h5 className="font-bold text-purple-800 mb-3">📱 Integración con Apps Móviles Android</h5>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Aplicaciones Campo:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• ODK Collect / KoBoToolbox configurado</li>
                              <li>• Formularios personalizados por módulo</li>
                              <li>• Captura offline (sin internet)</li>
                              <li>• Sincronización al regresar a cobertura</li>
                              <li>• Validación de datos en tiempo real</li>
                              <li>• Compatible con Android 8.0+</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">SMART Mobile:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• Patrullajes y rutas de vigilancia</li>
                              <li>• Registro de observaciones</li>
                              <li>• Alertas y reportes de incidentes</li>
                              <li>• Integración con servidor central</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500 mb-6">
                      <h5 className="font-bold text-yellow-800 mb-3">📦 Entregables Específicos</h5>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span>Geovisor completamente funcional y responsive</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span>GeoServer configurado con 20+ capas</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span>Módulos de deforestación e incendios operativos</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span>Sistema de reportes automatizados (PDF/Excel/SHP)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span>Integración con apps móviles Android</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span>Dashboard con métricas y gráficos en tiempo real</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span>API de servicios geoespaciales documentada</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span>Manual de usuario del geovisor (español)</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                      <h5 className="font-bold text-green-800 mb-3">✅ Criterios de Aceptación</h5>
                      <ul className="space-y-2 text-sm text-green-700">
                        <li>• Visualización de capas geoespaciales sin lag ni errores</li>
                        <li>• Análisis espaciales (buffer, intersect, union) funcionan correctamente</li>
                        <li>• Reportes se generan y exportan en los formatos especificados</li>
                        <li>• Apps móviles sincronizan datos correctamente con el servidor</li>
                        <li>• Dashboard muestra datos actualizados (máx. 5 min retraso)</li>
                        <li>• Performance: carga de mapas`menos 3 segundos en conexión promedio</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* HITO 4 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-200">
                  <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">HITO 4: Finalización, Testing y Entrega</h3>
                        <p className="text-amber-100">Semanas 7-8 | 26 horas | 20% del pago</p>
                      </div>
                      <div className="bg-white text-amber-600 px-4 py-2 rounded-lg font-bold">
                        ${(totalGeneral * 0.20).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="font-bold text-gray-800 mb-4 text-lg">Objetivos del Hito</h4>
                    <p className="text-gray-600 mb-6">
                      Completar el ciclo de desarrollo con testing exhaustivo, optimización de rendimiento,
                      documentación completa, capacitación del equipo y despliegue en producción.
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg">
                        <h5 className="font-bold text-red-800 mb-3">🧪 Testing y Aseguramiento de Calidad</h5>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Tipos de Testing:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• <strong>Unit Testing:</strong> Jest, Mocha (backend)</li>
                              <li>• <strong>Integration Testing:</strong> Supertest, API tests</li>
                              <li>• <strong>E2E Testing:</strong> Cypress o Playwright</li>
                              <li>• <strong>UI Testing:</strong> React Testing Library</li>
                              <li>• <strong>Performance Testing:</strong> Lighthouse, JMeter</li>
                              <li>• <strong>Security Testing:</strong> OWASP ZAP, SonarQube</li>
                              <li>• <strong>Accessibility:</strong> axe, WAVE</li>
                              <li>• <strong>Cross-browser:</strong> Chrome, Firefox, Safari, Edge</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Métricas de Calidad:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• Cobertura de código: >80%</li>
                              <li>• Performance Score: >90 (Lighthouse)</li>
                              <li>• Accessibility Score: 100</li>
                              <li>• SEO Score: >95</li>
                              <li>• Cero errores críticos</li>
                              <li>• Cero vulnerabilidades de seguridad alta</li>
                              <li>• Responsive: 100% en mobile/tablet/desktop</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
                        <h5 className="font-bold text-green-800 mb-3">⚡ Optimización y Performance</h5>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Frontend:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• Code splitting y lazy loading</li>
                              <li>• Minificación de JS/CSS</li>
                              <li>• Optimización de imágenes (WebP, lazy load)</li>
                              <li>• Compresión Gzip/Brotli</li>
                              <li>• Service Workers para PWA</li>
                              <li>• Caché estratégico en cliente</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Backend:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• Query optimization (índices DB)</li>
                              <li>• Redis cache para datos frecuentes</li>
                              <li>• CDN para assets estáticos</li>
                              <li>• Rate limiting y throttling</li>
                              <li>• Connection pooling</li>
                              <li>• Compresión de respuestas API</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
                        <h5 className="font-bold text-blue-800 mb-3">📚 Documentación Completa</h5>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Documentación Técnica:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• Manual de Instalación (paso a paso)</li>
                              <li>• Arquitectura del sistema (diagramas)</li>
                              <li>• Documentación de API (Swagger/OpenAPI)</li>
                              <li>• ERD y diccionario de datos</li>
                              <li>• Guía de despliegue (deployment)</li>
                              <li>• Scripts de backup y restauración</li>
                              <li>• Troubleshooting guide</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Manuales de Usuario:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• Manual del Administrador (español)</li>
                              <li>• Manual del Operador (español)</li>
                              <li>• Guía de Usuario Final (español)</li>
                              <li>• Manual del Geovisor (con screenshots)</li>
                              <li>• FAQs y casos de uso comunes</li>
                              <li>• Videos tutoriales (5-10 min c/u)</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded-r-lg">
                        <h5 className="font-bold text-purple-800 mb-3">👨‍🏫 Capacitación del Equipo</h5>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Sesiones de Capacitación:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• <strong>Sesión 1:</strong> Administración general del sistema (4h)</li>
                              <li>• <strong>Sesión 2:</strong> Gestión de usuarios y permisos (2h)</li>
                              <li>• <strong>Sesión 3:</strong> Gestión de contenidos y documentos (3h)</li>
                              <li>• <strong>Sesión 4:</strong> Uso del geovisor y reportes (4h)</li>
                              <li>• <strong>Sesión 5:</strong> Apps móviles y sincronización (2h)</li>
                              <li>• <strong>Sesión 6:</strong> Backups y mantenimiento (2h)</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Material de Capacitación:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• Presentaciones PPT/PDF</li>
                              <li>• Videos grabados de cada sesión</li>
                              <li>• Ejercicios prácticos hands-on</li>
                              <li>• Certificados de participación</li>
                              <li>• Canal de soporte post-capacitación</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded-r-lg">
                        <h5 className="font-bold text-orange-800 mb-3">🚀 Despliegue en Producción</h5>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Infraestructura:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• Configuración servidor producción</li>
                              <li>• Certificado SSL (Let's Encrypt)</li>
                              <li>• Dominio configurado (.bo)</li>
                              <li>• Firewall y seguridad de red</li>
                              <li>• Monitoreo 24/7 (UptimeRobot)</li>
                              <li>• Backups automáticos diarios</li>
                              <li>• CDN configurado para assets</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Migración de Datos:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• Scripts de migración de datos existentes</li>
                              <li>• Validación de integridad de datos</li>
                              <li>• Carga de datos iniciales</li>
                              <li>• Testing en producción</li>
                              <li>• Plan de rollback si es necesario</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500 mb-6">
                      <h5 className="font-bold text-yellow-800 mb-3">📦 Entregables Finales</h5>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span>Sistema completo en producción y funcionando</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span>Código fuente completo en GitHub</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span>Documentación técnica completa (>100 páginas)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span>Manuales de usuario en español</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span>Videos tutoriales (8-10 videos)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span>Reporte final de testing y QA</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span>Certificados de capacitación para participantes</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                          <span>Acta de entrega-recepción firmada</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                      <h5 className="font-bold text-green-800 mb-3">✅ Criterios de Aceptación Final</h5>
                      <ul className="space-y-2 text-sm text-green-700">
                        <li>• Sistema pasa todos los tests (unit, integration, E2E)</li>
                        <li>• Performance scores >90 en Lighthouse</li>
                        <li>• Cero vulnerabilidades críticas de seguridad</li>
                        <li>• Documentación completa y clara</li>
                        <li>• Equipo capacitado puede operar el sistema de forma autónoma</li>
                        <li>• Sistema en producción funcionando 24/7 sin errores críticos</li>
                        <li>• Cliente satisfecho y firma acta de conformidad</li>
                      </ul>
                    </div>
                  </div>
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