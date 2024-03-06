package drawparty.server.person;

import drawparty.server.person.Person;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonService {
    public Person getPerson(int index){
        List<Person>  people =  List.of(
                new Person(
                        1L,
                        "Connor",
                        "Connor@gmail.com"
                ),
                new Person(
                        2L,
                        "John",
                        "John@gmail.com"
                )
        );
        return people.get(index);
    }
}
