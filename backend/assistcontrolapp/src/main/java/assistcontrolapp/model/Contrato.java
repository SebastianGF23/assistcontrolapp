package assistcontrolapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity
public class Contrato {
	@Id
	private String tipo;
	private int duracion;
	
	public String getTipo() {
		return tipo;
	}
	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	public int getDuracion() {
		return duracion;
	}
	public void setDuracion(int duracion) {
		this.duracion = duracion;
	} 
}
