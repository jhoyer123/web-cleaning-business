export interface Producto {
  id: string;
  nombre: string;
  presentacion: string;
  categoria: 'lavandinas' | 'detergentes' | 'limpiapisos' | 'desengrasantes' | 'esponjas';
  descripcion: string;
  imagen: string;
}

export const CATEGORIAS = [
  { id: 'todos', nombre: 'Todos' },
  { id: 'lavandinas', nombre: 'Lavandinas' },
  { id: 'detergentes', nombre: 'Detergentes' },
  { id: 'limpiapisos', nombre: 'Limpiapisos' },
  { id: 'desengrasantes', nombre: 'Desengrasantes' },
  { id: 'esponjas', nombre: 'Esponjas y Paños' }
];

export const PRODUCTOS: Producto[] = [
  {
    id: 'lav-01',
    nombre: 'Lavandina Concentrada Multiuso 5%',
    presentacion: 'Bidón de 5 Litros',
    categoria: 'lavandinas',
    descripcion: 'Desinfectante de alta concentración para la limpieza profunda de superficies, pisos, baños y áreas comunes.',
    imagen: '/images/cat_lavandina.png'
  },
  {
    id: 'lav-02',
    nombre: 'Lavandina Tradicional Doméstica',
    presentacion: 'Botella de 1 Litro',
    categoria: 'lavandinas',
    descripcion: 'Lavandina de uso cotidiano para blanqueo de ropa blanca y desinfección estándar de cocinas y sanitarios.',
    imagen: '/images/cat_lavandina.png'
  },
  {
    id: 'lav-03',
    nombre: 'Lavandina en Gel Desinfectante',
    presentacion: 'Envase de 750 ml',
    categoria: 'lavandinas',
    descripcion: 'Fórmula espesa que se adhiere a las paredes de inodoros y azulejos, eliminando bacterias y sarro con facilidad.',
    imagen: '/images/cat_lavandina.png'
  },
  {
    id: 'det-01',
    nombre: 'Detergente en Polvo Industrial',
    presentacion: 'Saco de 10 Kg',
    categoria: 'detergentes',
    descripcion: 'Fórmula de gran rendimiento diseñada para el lavado industrial de ropa en hoteles, hospitales, restaurantes y el hogar.',
    imagen: '/images/cat_detergente.png'
  },
  {
    id: 'det-02',
    nombre: 'Detergente en Polvo Multiuso Premium',
    presentacion: 'Bolsa de 3 Kg',
    categoria: 'detergentes',
    descripcion: 'Remueve manchas difíciles tanto en ropa blanca como de color, con agentes suavizantes y fragancia de larga duración.',
    imagen: '/images/cat_detergente.png'
  },
  {
    id: 'det-03',
    nombre: 'Lavavajillas Líquido Concentrado',
    presentacion: 'Bidón de 5 Litros',
    categoria: 'detergentes',
    descripcion: 'Detergente líquido neutro de alto poder desengrasante para el lavado manual de vajillas, cubiertos y ollas.',
    imagen: '/images/cat_detergente.png'
  },
  {
    id: 'lim-01',
    nombre: 'Limpiapisos Desinfectante Lavanda',
    presentacion: 'Bidón de 5 Litros',
    categoria: 'limpiapisos',
    descripcion: 'Limpia, desinfecta y perfuma con un aroma a lavanda que permanece por horas. Apto para cerámicas y porcelanatos.',
    imagen: '/images/cat_limpiapisos.png'
  },
  {
    id: 'lim-02',
    nombre: 'Limpiapisos Desinfectante Pino Silvestre',
    presentacion: 'Galón de 3.8 Litros',
    categoria: 'limpiapisos',
    descripcion: 'Desinfectante clásico de pino con acción bactericida e higienizante. Ideal para grandes superficies comerciales y pasillos.',
    imagen: '/images/cat_limpiapisos.png'
  },
  {
    id: 'lim-03',
    nombre: 'Limpiador Especial de Porcelanatos y Mármol',
    presentacion: 'Botella de 1 Litro',
    categoria: 'limpiapisos',
    descripcion: 'Fórmula de pH neutro que remueve la suciedad sin dañar el brillo original ni dejar residuos opacos sobre el piso.',
    imagen: '/images/cat_limpiapisos.png'
  },
  {
    id: 'des-01',
    nombre: 'Desengrasante Industrial Multiuso',
    presentacion: 'Bidón de 5 Litros',
    categoria: 'desengrasantes',
    descripcion: 'Poderoso removedor de grasa de grado industrial para cocinas comerciales, campanas extractoras, hornos y talleres mecánicos.',
    imagen: '/images/cat_desengrasante.png'
  },
  {
    id: 'des-02',
    nombre: 'Desengrasante de Cocinas con Atomizador',
    presentacion: 'Botella de 500 ml con Gatillo',
    categoria: 'desengrasantes',
    descripcion: 'Limpiador de acción rápida para eliminar grasa diaria y suciedad quemada en mesones, estufas y microondas.',
    imagen: '/images/cat_desengrasante.png'
  },
  {
    id: 'esp-01',
    nombre: 'Esponjas de Cocina Doble Cara',
    presentacion: 'Pack de 12 Unidades',
    categoria: 'esponjas',
    descripcion: 'Esponja de doble acción: lado amarillo suave para superficies delicadas y lado verde abrasivo para eliminar restos de comida.',
    imagen: '/images/cat_esponja.png'
  },
  {
    id: 'esp-02',
    nombre: 'Fibra Abrasiva Industrial Verde',
    presentacion: 'Paquete de 6 Unidades',
    categoria: 'esponjas',
    descripcion: 'Fibra de alta abrasión para la limpieza profunda de ollas, parrillas y utensilios industriales de cocina.',
    imagen: '/images/cat_esponja.png'
  },
  {
    id: 'esp-03',
    nombre: 'Paños de Microfibra Multiuso',
    presentacion: 'Paquete de 3 Unidades (Colores variados)',
    categoria: 'esponjas',
    descripcion: 'Paños ultra absorbentes que capturan el polvo y la grasa sin dejar pelusas ni rayaduras. Ideales para muebles y vidrios.',
    imagen: '/images/cat_esponja.png'
  }
];
