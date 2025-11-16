from random import randint

class Gene:
    def __init__(self, value):
        self.value = value

    def mutate(self):
        old_value = self.value
        self.value = 1 if old_value == 0 else 0

class Chromosome:
    def __init__(self, genes):
        self.genes = genes

    def mutate(self):
        num = randint(1, 10)
        for _ in range(num):
            idx = randint(0, len(self.genes) - 1)
            self.genes[idx].mutate()

class DNA:
    def __init__(self, chromosomes):
        self.chromosomes = chromosomes

    def mutate(self):
        num = randint(1, 10)
        for _ in range(num):
            idx = randint(0, len(self.chromosomes) - 1)
            self.chromosomes[idx].mutate()


class Organism:
    def __init__(self, dna, probability):
        self.dna = dna
        self.probability = probability

    def mutate(self):
        if randint(0, 100) < self.probability * 100:
            self.dna.mutate()


def print_dna(dna):
    for c_idx, chrom in enumerate(dna.chromosomes):
        values = [g.value for g in chrom.genes]
        print(f"Chromosome {c_idx + 1}: {values}")

genes = [Gene(0) for _ in range(10)]
chromosomes = [
    Chromosome([Gene(0) for _ in range(10)])
    for _ in range(10)
]
dna = DNA(chromosomes)
org = Organism(dna, probability=0.8)
print_dna(org.dna)
org.mutate()
print_dna(org.dna)
org.mutate()
print_dna(org.dna)
org.mutate()
print_dna(org.dna)


