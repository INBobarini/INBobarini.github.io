let competence = {
    GC:{
        AeI:{name:'Auditoría e inspección de procesos', icon:'<i class="bi bi-clipboard2-check" onmouseover="hoverIcon(`AeI`)" onmouseout="removeTooltips()"></i>'},
        PA:{name:'Pensamiento analítico', icon:'<i class="bi bi-bar-chart-line-fill" onmouseover="hoverIcon(`PA`)" onmouseout="removeTooltips()"></i>'}, 
        HI:{name:'Uso de herramientas informáticas', icon:'<i class="bi bi-pc-display" onmouseover="hoverIcon(`HI`)" onmouseout="removeTooltips()"></i>'},
        NyE:{name:'Conocimiento de normas y especificaciones',icon:'<i class="bi bi-file-text-fill" onmouseover="hoverIcon(`NyE`)" onmouseout="removeTooltips()"></i>'},
        DSG:{name:'Documentación del Sistema de Gestión', icon:'<i class="bi bi-folder-fill" onmouseover="hoverIcon(`DSG`)" onmouseout="removeTooltips()"></i>'},
        ExpRub:{name:'Experiencia en el rubro', icon:'<i class="bi bi-briefcase-fill" onmouseover="hoverIcon(`ExpRub`)" onmouseout="removeTooltips()"></i>'},
        Langs:{name:'Idiomas', icon:'<i class="bi bi-chat-text-fill" onmouseover="hoverIcon(`Langs`)" onmouseout="removeTooltips()"></i>'},
        LyC:{name:'Liderazgo y comunicación', icon:'<i class="bi bi-people-fill" onmouseover="hoverIcon(`LyC`)" onmouseout="removeTooltips()"></i>'}
    },
}

let selfAssessment = {
    presentation:
    [
        "Mi nombre es Iván Bobarini, Ingeniero Industrial egresado de la UNC.",
        "Durante mi trayectoria profesional, me he especializado en definir metodologías de trabajo eficaces para pymes, cumpliendo con los requisitos normativos de las normas ISO y API. Mis sistemas de gestión, así como las metodologías individuales que he desarrollado, se caracterizan por adaptarse a la organización y sus necesidades específicas, lo que ha llevado a una reducción de la incertidumbre operativa y a procesos más fiables y eficaces.",
        "En el último año, he dedicado tiempo a ampliar mis habilidades y conocimientos en desarrollo web con el objetivo de crear aplicaciones personalizadas para el registro de datos, alineadas con el flujo de trabajo de la actividad correspondiente.",
        "Considero fundamental la capacidad de tomar el control de nuestro propio trabajo para aumentar la productividad personal."
    ],
    competences:{
        GC:{
            AeI:8,
            PA:7, 
            HI:8,
            NyE:8,
            DSG:9,
            ExpRub:6,
            Langs:7,
            LyC:7
        },
        PM:{

        },
        BA:{},
        FS:{}
    }

}

let jobs = {   
    ejegmk9:{
        source:"https://ar.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-analista-de-calidad-jr-en-cordoba-CCC04F5F54DF748361373E686DCF3405",
        announcer: "handSelection",
        description:{
            title: "Analista de Calidad Jr.",
            company: "Importante compañía",
            reqs: [
                "Nivel de estudios: Secundario Técnico o afín",
                "Manejo de office",
                "Conocimientos de metrología industrial (deseable)",
                "Manejo de office. Planilla de cálculos nivel medio-avanzado.",
                "Inglés técnico (no excluyente)",
                "Metrología, interpretación de planos",
                "Auditor de Calidad ISO 9001 (deseable)",
                "Redacción de textos técnicos",
                "ISO 14001; ISO 45001 (no excluyente)",
                "Experiencia de 2 años en gestión de Calidad de Planta y como Auditor de Calidad Interno (excluyente)"
            ],
            resps: [
                "Cumplir y hacer cumplir los Procedimientos/Instructivos/Registros vigentes en el ámbito en el cual se desarrolla, tanto en su proceso como en procesos vinculantes.",
                "Asegurar la presencia de toda documentación relacionada con controles de calidad en las distintas etapas de los procesos productivos.",
                "Auditar los procesos productivos en pos de asegurar el cumplimiento con las especificaciones relativas a la calidad de los productos.",
                "Participar en las reuniones de No Conformidades de producto/proceso/insumo generadas interna/externamente.",
                "Participar en la definición eficiente de los controles necesarios en los insumos para cumplir con los objetivos de calidad y evitar las No Conformidades.",
                "Recolectar información relacionada a los Incidentes de Proveedores.",
                "Mantener actualizados los indicadores y registros gestionados por el área.",
                "Confeccionar informes solicitados por superiores en tiempo y forma.",
                "Realizar capacitaciones e inducciones operativas a personal de distintos procesos."
            ],
            benefits:  [ 
                "Remuneración competitiva.",
                "Crecimiento en un ambiente dinámico y desafiante.",
                "Jornada de lunes a viernes full time."
            ]
        },
        eval: [
            [{PA:1}],
            [{HI:1}],
            [{AeI:2}],
            [{HI:3}],
            [{Langs:5}],
            [{NyE:2}],
            [{AeI:2},{NyE:2}],
            [{DSG:2}],
            [{NyE:2}],
            [{AeI:2}],
            [{LyC:2},{DSG:1}],
            [{DSG:1}],
            [{NyE:3},{AeI:2}],
            [{PA:2},{LyC:1}],
            [{PA:2},{ExpRub:2}],
            [{DSG:1}],
            [{DSG:1}],
            [{LyC:1},{HI:3}],
            [{LyC:3},{ExpRub:3}]
        ],
        selfEval:{
            AeI:8,
            PA:7, 
            HI:8,
            NyE:8,
            DSG:9,
            ExpRub:6,
            Langs:7,
            LyC:6,
        },
        comments:'En cuanto a la propuesta en particular, expuesta en la siguiente página. Creo que soy un buen candidato'
    },
    elemce:{
        source:"https://ar.computrabajo.com/trabajo-de-jefe-de-aseguramiento#68D7C9138D8BD4B061373E686DCF3405",
        announcer: "Anónimo",
        description:{
            title: "Jefe de Aseguramiento de Calidad",
            company: "Importante Empresa Industrial líder en su rubro",
            reqs: [
                "formación de grado en carreras de Ingeniería",
                "desempeño en la Industria Metalúrgica, Automotriz o Plástica",
                "3 años de experiencia"
            ],
            resps: [
                "tendrá a su cargo un estricto sistema de calidad,",
                " bajo normas norteamericanas de la Industria Petrolera",
                "liderando un equipo de profesionales altamente capacitados",
                "diseño de los planes de calidad",
                "para el desarrollo de nuevos productos y tecnologías",
                "gestionando auditorias internacionales",
                
            ],
            benefits:  [ 
                "Prepaga de 1° nivel",
                "Comedor en Planta",
                "Transporte diario."
            ]
        },
        eval: [
            [{PA:4}],
            [{ExpRub:2}],
            [{ExpRub:2}],
            [{DSG:5},{Langs:1}],
            [{NyE:3}],
            [{LyC:7}],
            [{DSG:2},{NyE:2},{AeI:2},{HI:3},{PA:3}],
            [{ExpRub:3},{NyE:2},{NyE:2}],
            [{AeI:4},{Langs:6}],
        ],
        selfEval:{
            AeI:7,
            PA:7, 
            HI:8,
            NyE:8,
            DSG:9,
            ExpRub:6,
            Langs:8,
            LyC:6,
        },
        comments:[
            'Considero que podría adaptarme rápídamente al puesto en cuestión, tengo claro los procesos de auditorías y he interpretado normas especificas de productos API (5b, 7-2 y 11b).',
            "Tambien que puedo desarrollar el Liderazgo y Comunicación necesarios a medida que me familiarice con las normas y tecnologías de producción propios de la empresa.",
            "Me parece que mi diferencial frente a otros postulantes puede ser en que yo tenga una mayor flexibilidad para generar información para las partes interesadas y/o usuarios de los Planes de Calidad."
        ]
    }

}
