import PresupuestosArchivosModel from './PresupuestosArchivosModel';
export default class PresupuestosModel {
    public Serie: string
    public Presupuesto: string
    public NuestroCliente: string
    public SuPresupuesto: string
    public SuCliente: string
    public NombreCliente: string

    public nuestroClienteRazonSocial: string
    public archivos: PresupuestosArchivosModel[]
}