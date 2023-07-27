package assistcontrolapp.repository;
import assistcontrolapp.model.Empleado;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EmpleadoRepository extends JpaRepository<Empleado,Integer>{
	
}
