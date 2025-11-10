class creadorProductos{
    static id = 0
    constructor(titulo, descripcion, tipo, cantidad, precio){
        this.id = ++creadorProductos.id
        this.titulo = titulo
        this.tipo = tipo
        this.descripcion = descripcion
        this.cantidad = cantidad
        this.precio = precio
    }
}

const baseDeDatosDeProductosInmutable = []

baseDeDatosDeProductosInmutable.push(new creadorProductos("Tornillo para Madera 4x30mm", "Tornillo fosfatado para madera de rosca honda y punta afilada.", "madera", 50, 4.5))
baseDeDatosDeProductosInmutable.push(new creadorProductos("Tornillo para Madera 5x50mm", "Tornillo zincado de alta resistencia para uniones de madera gruesa.", "madera", 50, 7.2))
baseDeDatosDeProductosInmutable.push(new creadorProductos("Autoperforante para Chapa 4.2x19mm", "Tornillo de punta en broca para chapa, no requiere perforación previa.", "chapa", 25, 6))
baseDeDatosDeProductosInmutable.push(new creadorProductos("Drywall 3.5x25mm Cabeza Trompeta", "Fosfatado negro para fijar placas de yeso a los perfiles.", "drywall", 100, 3.8))
baseDeDatosDeProductosInmutable.push(new creadorProductos("Máquina Métrico M6x30", "Tornillo para metal roscado o tuerca, cabeza Phillips.", "chapa", 30, 1.5))
baseDeDatosDeProductosInmutable.push(new creadorProductos("Máquina Métrico M8x40 Acero 8.8", "Alta resistencia para aplicaciones estructurales.", "construcción", 30, 3))
baseDeDatosDeProductosInmutable.push(new creadorProductos("Tirafondo 8x60mm Cabeza Hexagonal", "Para madera estructural.", "madera", 60, 9.5))
baseDeDatosDeProductosInmutable.push(new creadorProductos("Allen M5x25 Cabeza Cilíndrica", "Ideal para electrónica.", "electrónica", 20, 2.8))
baseDeDatosDeProductosInmutable.push(new creadorProductos("Torx para Madera 4x50mm", "Cabeza Torx para alto torque sin desgaste.", "madera", 20, 6.5))
baseDeDatosDeProductosInmutable.push(new creadorProductos("Inoxidable M6x40 A2", "Acero inoxidable para exteriores o ambientes húmedos.", "exterior", 20, 9))
baseDeDatosDeProductosInmutable.push(new creadorProductos("Bulón Hexagonal M10x60 + Tuerca", "Conjunto para anclajes pesados.", "construcción", 10, 15))
baseDeDatosDeProductosInmutable.push(new creadorProductos("Cabeza Redonda 3x12mm Electrónica", "Tornillo pequeño para placas y anclajes electrónicos.", "electrónica", 25, 2))
baseDeDatosDeProductosInmutable.push(new creadorProductos("Tornillo para Madera 3.5x20mm", "Ideal para fijaciones pequeñas en muebles y terminaciones.", "madera", 40, 3.2))
baseDeDatosDeProductosInmutable.push(new creadorProductos("Autoperforante con Arandela 4.8x25mm", "Para chapas y techos, incluye arandela de sellado.", "chapa", 30, 7.5))
baseDeDatosDeProductosInmutable.push(new creadorProductos("Drywall 3.5x35mm para Madera", "Para colocar placas de yeso en estructura de madera.", "drywall", 100, 4.2))
baseDeDatosDeProductosInmutable.push(new creadorProductos("Máquina Métrico M4x16 Cabeza Phillips", "Tornillo pequeño para gabinetes y soportes metálicos.", "chapa", 20, 1.4))
baseDeDatosDeProductosInmutable.push(new creadorProductos("Allen M8x50 Acero 12.9", "Alta resistencia industrial para maquinaria pesada.", "construcción", 25, 5.8))
baseDeDatosDeProductosInmutable.push(new creadorProductos("Inoxidable M5x20 Cabeza Avellanada", "Para terminaciones prolijas en exteriores húmedos.", "exterior", 25, 6.5))
baseDeDatosDeProductosInmutable.push(new creadorProductos("Tornillo para Madera 6mm", "Tornillo de acero fosfatado para madera, cabeza pozidrive.", "madera", 50, 8.5))
baseDeDatosDeProductosInmutable.push(new creadorProductos("Tornillo para Chapa 3/4\"", "Rosca autorroscante, punta mecha para perforación directa.", "chapa", 20, 9.2))
baseDeDatosDeProductosInmutable.push(new creadorProductos("Métrico M5x20", "Rosca estándar métrica, uso general, cabeza allen.", "construcción", 25, 11))
baseDeDatosDeProductosInmutable.push(new creadorProductos("Parker Nº8", "Tornillo parker para chapa, cabeza philips, zincado.", "chapa", 150, 7.6))
baseDeDatosDeProductosInmutable.push(new creadorProductos("Autoperforante 1\"", "Punta mecha, ideal para fijar chapa a estructura metálica.", "chapa", 200, 21.8))
baseDeDatosDeProductosInmutable.push(new creadorProductos("Tornillo de Banco 1/4\" x 3\"", "Tornillo largo para fijaciones estructurales, alta resistencia.", "construcción", 60, 14.5))
baseDeDatosDeProductosInmutable.push(new creadorProductos("Tornillo Inoxidable M4x16", "Acero inoxidable A2, resistente a la corrosión, cabeza philips.", "exterior", 20, 19.5))
baseDeDatosDeProductosInmutable.push(new creadorProductos("Tornillo Inoxidable 5mm", "Rosca profunda, acero inoxidable, cabeza philips.", "exterior", 100, 22.5))
baseDeDatosDeProductosInmutable.push(new creadorProductos("Drywall 6x1\" en Punta", "Tornillo negro fosfatado para placas de yeso, punta fina, cabeza philips.", "drywall", 100, 4.8))
baseDeDatosDeProductosInmutable.push(new creadorProductos("Drywall 6x1 1/4\" para Perfilería", "Tornillo fosfatado para montaje de perfiles y placas, alta penetración.", "drywall", 300, 13.4))

localStorage.setItem("Base de Datos de Productos", JSON.stringify(baseDeDatosDeProductosInmutable))
