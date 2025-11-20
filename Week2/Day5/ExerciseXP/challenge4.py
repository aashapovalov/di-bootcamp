from random import randint, shuffle
class Human:
    def __init__(self, id_number, name, age, priority):
        self.id_number = id_number
        self.name = name
        self.age = age
        self.priority = priority
        self.blood_type = (["A", "B", "AB", "O"])[randint(0, 3)]
        self.family = []
    def add_family_member(self, family_member):
        self.family.append(family_member)
        family_member.family.append(self)

class Queue:
    def __init__(self):
        self.humans = []

    def add_person(self, person1):
        if person1.age > 60 or person1.priority:
            self.humans.insert(0, person1)
        else:
            self.humans.append(person1)

    def find_in_queue(self, person):
        for index in range(len(self.humans)):
            if self.humans[index].id_number == person.id_number:
                return index
        return None

    def swap(self, person1, person2):
        index1 = self.find_in_queue(person1)
        index2 = self.find_in_queue(person2)
        self.humans[index1] = person2
        self.humans[index2] = person1

    def get_next(self):
        if len(self.humans) == 0:
            return None
        else:
            human_cur = self.humans[0]
            del self.humans[0]
            return human_cur

    def get_next_blood_type(self, blood_type):
        if len(self.humans) == 0:
            return None
        else:
            index_cur = 0
            while index_cur == len(self.humans) - 1:
                if self.humans[index_cur].blood_type == blood_type:
                    break
                index_cur += 1
            human_cur = self.humans[index_cur]
            del self.humans[index_cur]
            return human_cur

    def sort_by_age(self):
        self.humans.sort(key=lambda x: (not x.priority, -x.age))

    def rearrange_queue(self):
        while True:
            shuffle(self.humans)
            count = 0
            for index1 in range(len(self.humans)):
                if len(self.humans[index1].family) > 0:
                    for index2 in range(len(self.humans[index1].family)):
                        if self.humans[index1].family[index2] in self.humans:
                            if abs(index1 - self.humans.index(self.humans[index1].family[index2])) == 1:
                                count += 1
                        else:
                            continue
                else:
                    continue
            if count == 0:
                return False


h1 = Human(id_number=1, name="Alice", age=25, priority=False)
h2 = Human(id_number=2, name="Bob", age=70, priority=False)
h3 = Human(id_number=3, name="Charlie", age=50, priority=True)
h4 = Human(id_number=4, name="Diana", age=35, priority=False)
h5 = Human(id_number=5, name="Eve", age=65, priority=True)
h6 = Human(id_number=6, name="Frank", age=18, priority=False)
h7 = Human(id_number=7, name="Grace", age=75, priority=False)
h8 = Human(id_number=8, name="Hank", age=45, priority=True)
queue = Queue()
queue.add_person(h1)
queue.add_person(h2)
queue.add_person(h3)
queue.add_person(h4)
queue.add_person(h5)
queue.add_person(h6)
queue.add_person(h7)
queue.add_person(h8)
for person in queue.humans:
    print(person.id_number, person.name, person.age, person.priority)
queue.sort_by_age()
print(" - ")

for person in queue.humans:
    print(person.id_number, person.name, person.age, person.priority)
