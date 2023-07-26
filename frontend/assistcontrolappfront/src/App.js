import React, { Component } from "react";
import axios from "axios";
import { Breadcrumb, Button, Card, Row, Table, Spinner, Modal, Form } from "react-bootstrap";
import Navbar from './components/Navbar';
export default class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      ListaEmpleados:'',
      nombre_empleado:'',
      apellido_p:'',
      apellido_m:'',
      contrato:'',
      cargo:'',
      nombre_empleado_f:'',
      apellido_p_f:'',
      apellido_m_f:'',
      contrato_f:'',
      cargo_f:'',
      modalNuevoEmpleado:false,
      modalNuevoCargo:false,
      modalNuevoContrato:false,
      nombre_nuevo_cargo:'',
      descripcion_nuevo_cargo:'',
      nombre_nuevo_contrato:'',
      duracion_nuevo_contrato:''
    };
  }

	async componentDidMount() {
		try {
			const empleados = await this.getEmpleados();
			console.log(empleados)
      this.setState({ListaEmpleados:empleados , isLoading:false})
		} catch(e) {
			console.log(e)
		}
	}

  getEmpleados(){

    /*

    const empleados=axios.get("http://localhost:8080/empleados")

    */
    const empleados= [

      {"nombre":"jonas","apellido_p":"rojas","apellido_m":"azules","cargo":"seguridad","contrato":"indefinido"},
      {"nombre":"jonas","apellido_p":"morado","apellido_m":"morado","cargo":"director","contrato":"plazo fijo"},
      {"nombre":"abdul","apellido_p":"abdal","apellido_m":"hakim","cargo":"director","contrato":"plazo fijo"},
      {"nombre":"jonas","apellido_p":"contreras","apellido_m":"sepulveda","cargo":"seguridad","contrato":"plazo fijo"},
      
      ]

    return empleados;
  }

  handleModalEmpleados=()=>{
    if(this.state.modalNuevoEmpleado===true){
      this.setState({modalNuevoEmpleado:false})
      this.setState({nombre_empleado_f:''})
      this.setState({apellido_m_f:''})
      this.setState({apellido_p_f:''})
      this.setState({cargo_f:''})
      this.setState({contrato_f:''})
    }else{
      this.setState({modalNuevoEmpleado:true})
    }
  }

  handleModalCargos=()=>{
    if(this.state.modalNuevoCargo===true){
      this.setState({modalNuevoCargo:false})
      this.setState({nombre_nuevo_cargo:''})
      this.setState({descripcion_nuevo_cargo:''})
    }else{
      this.setState({modalNuevoCargo:true})
    }
  }

  handleModalContratos=()=>{
    if(this.state.modalNuevoContrato===true){
      this.setState({modalNuevoContrato:false})
      this.setState({nombre_nuevo_contrato:''})
      this.setState({duracion_nuevo_contrato:false})
    }else{
      this.setState({modalNuevoContrato:true})
    }
  }

  crearNuevoEmpleado=()=>{
    var empleado_json=[{"nombre":this.state.nombre_empleado_f,"apellido_p":this.state.apellido_p_f,"apellido_m":this.state.apellido_m_f,"cargo":this.state.cargo_f,"contrato":this.state.cargo_f}]
    this.handleModalEmpleados()
    console.log(empleado_json)
    /*
    axios.post("http://localhost:8080/empleado", empleado_json)
    */
  }

  crearNuevoCargo=()=>{
    var cargo_json = [{"nombre":this.state.nombre_nuevo_cargo,"descripcion":this.state.descripcion_nuevo_cargo}]
    this.handleModalCargos()
    console.log(cargo_json)
    /*
    axios.post("http://localhost:8080/cargo", cargo_json)
    */
  }

  crearNuevoContrato=()=>{
    var contrato_json=[{"tipo":this.state.nombre_nuevo_contrato,"duracion":parseInt(this.state.duracion_nuevo_contrato)}]
    this.handleModalContratos()
    console.log(contrato_json)
    /*
    axios.post("http://localhost:8080/contrato", contrato_json)
    */
  }
	render() {
    return ( 
      <div>
          <Navbar/>

          <p>

          <button type="button" class="btn btn-primary" style={{marginLeft:"1.8rem"}} onClick={this.handleModalEmpleados}>Crear nuevo empleado</button>

          <button type="button" class="btn btn-primary" style={{marginLeft:"1.8rem"}} onClick={this.handleModalCargos}>Crear nuevo cargo</button>

          <button type="button" class="btn btn-primary" style={{marginLeft:"1.8rem"}} onClick={this.handleModalContratos}>Crear nuevo tipo de contrato</button>

          </p>
          <table class="table">
            <thead>
              <tr>
                <th></th>
                <th scope="col">Nombres</th>
                <th scope="col">Apellido Paterno</th>
                <th scope="col">Apellido Materno</th>
                <th scope="col">Cargo</th>
                <th scope="col">Contrato</th>
              </tr>
            </thead>
            <tbody>
                {this.state.isLoading ? 
                    <h1>"Cargando</h1>
                  :
                  this.state.ListaEmpleados.map((item, index) => (
                    ((!this.state.nombre || this.state.nombre===item.nombre) && (!this.state.apellido_p || this.state.apellido_p===item.apellido_p) && (!this.state.apellido_m || this.state.apellido_m===item.apellido_m) && (!this.state.cargo || this.state.cargo===item.cargo) && (!this.state.contrato || this.state.contrato===item.contrato))
                    ?
                      <>
                      
                      <tr>
                        <td></td>
                        <td>{item.nombre}</td>
                        <td>{item.apellido_p}</td>
                        <td>{item.apellido_m}</td>
                        <td>{item.cargo}</td>
                        <td>{item.contrato}</td>
                      </tr>

                      </>
                    :
                    <>
                    
                    </>
                  ))
             
                }             
            </tbody>
            
          </table>
          

          <Modal show={this.state.modalNuevoEmpleado}>
            <Modal.Header>
            <b>Creación de nuevo empleado</b>
            </Modal.Header>
            <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control placeholder="Nombre" onChange={(event)=>{this.setState({nombre_f : event.target.value})}} />
                <Form.Control placeholder="Apellido Paterno" onChange={(event)=>{this.setState({apellido_p_f : event.target.value})}} />
                <Form.Control placeholder="Apellido Materno" onChange={(event)=>{this.setState({apellido_m_f : event.target.value})}} />
                <Form.Control placeholder="Cargo" onChange={(event)=>{this.setState({cargo_f : event.target.value})}} />
                <Form.Control placeholder="Contrato" onChange={(event)=>{this.setState({contrato_f : event.target.value})}} />
              </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
              {this.state.nombre_f ==='' || this.state.apellido_m_f==='' || this.state.apellido_p_f==='' || this.state.cargo_f==='' || this.state.contrato_f==='' ? 
                <><button type="button" class="btn btn-primary" disabled>Aceptar</button></>
                :
                <><button type="button" class="btn btn-primary" onClick={this.crearNuevoEmpleado}>Aceptar</button></>
             }
              
              <button  type="button" class="btn btn-danger" onClick={this.handleModalEmpleados}>Cancelar</button>
            </Modal.Footer>
         </Modal>

         <Modal show={this.state.modalNuevoCargo}>
          <Modal.Header>
            Creación de un nuevo cargo.
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control placeholder="Nombre del nuevo cargo" onChange={(event)=>{this.setState({nombre_nuevo_cargo : event.target.value})}} />
                <Form.Control placeholder="Descripción del nuevo cargo" onChange={(event)=>{this.setState({descripcion_nuevo_cargo : event.target.value})}} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
          {this.state.nombre_nuevo_cargo==='' || this.state.descripcion_nuevo_cargo==='' ? 
                <><button type="button" class="btn btn-primary" disabled>Aceptar</button></>
                :
                <><button type="button" class="btn btn-primary" onClick={this.crearNuevoCargo}>Aceptar</button></>
             }
              
              <button  type="button" class="btn btn-danger" onClick={this.handleModalCargos}>Cancelar</button>
          </Modal.Footer>
         </Modal>

         <Modal show={this.state.modalNuevoContrato}>
          <Modal.Header>
            Creación de nuevo tipo de contrato
          </Modal.Header>
          <Modal.Body>
          <Form>
              <Form.Group className="mb-3">
                <Form.Control placeholder="Nombre de nuevo contrato" onChange={(event)=>{this.setState({nombre_nuevo_contrato : event.target.value})}} />
                <Form.Control placeholder="Duración nuevo contrato" onChange={(event)=>{this.setState({duracion_nuevo_contrato : event.target.value})}} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
          {this.state.nombre_nuevo_contrato!=='' && !isNaN(this.state.duracion_nuevo_contrato) ? 
                <><button type="button" class="btn btn-primary" onClick={this.crearNuevoContrato}>Aceptar</button></>
                :
                <><button type="button" class="btn btn-primary" disabled>Aceptar</button></>
             }
              
              <button  type="button" class="btn btn-danger" onClick={this.handleModalContratos}>Cancelar</button>
          </Modal.Footer>
         </Modal>

         <div class="card border-light mb-3" style={{width:400,height:400, alignItems: 'left',justifyContent: 'center',}}>
            <div class="card-header">Filtrar por...</div>
              <div class="card-body">
          <Form>
            <Form.Group className="mb-10">
              <Form.Control placeholder="Nombre" onChange={(event)=>{this.setState({nombre : event.target.value})}} />
              <Form.Control placeholder="Apellido Paterno" onChange={(event)=>{this.setState({apellido_p : event.target.value})}} />
              <Form.Control placeholder="Apellido Materno" onChange={(event)=>{this.setState({apellido_m : event.target.value})}} />
              <Form.Control placeholder="Cargo" onChange={(event)=>{this.setState({cargo : event.target.value})}} />
              <Form.Control placeholder="Contrato" onChange={(event)=>{this.setState({contrato : event.target.value})}} />
            </Form.Group>
          </Form>
                </div>
          </div>

			</div>
    );
  }
}