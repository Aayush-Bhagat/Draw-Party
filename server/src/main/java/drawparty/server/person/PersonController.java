package drawparty.server.person;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/person")
public class PersonController {

    private static final Logger logger = LoggerFactory.getLogger(PersonController.class);
    private final PersonService personService;

    public PersonController(PersonService personService){
        this.personService = personService;
  ;  }

    @GetMapping("/{id}")
    public Person getPeople(@PathVariable int id){
        return personService.getPerson(id);
    }

}
