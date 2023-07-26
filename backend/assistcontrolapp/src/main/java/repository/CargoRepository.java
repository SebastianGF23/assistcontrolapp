package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import model.Cargo;

public interface CargoRepository extends JpaRepository<Cargo,String>{

}
