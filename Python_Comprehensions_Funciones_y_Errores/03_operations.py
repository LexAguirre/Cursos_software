def run():
    #Union
    set_a = {"col", "mex", "bol"};
    set_b = {"pe", "bol"};

    set_c = set_a.union(set_b);
    print(set_c);
    print(set_a | set_b);

    #intersection
    set_c = set_a.intersection(set_b);
    print(set_c);
    print(set_a & set_b);

    #Difference
    set_c = set_a.difference(set_b);
    print(set_c);
    print(set_a - set_b);

    #Symmetric difference
    set_c = set_a.symmetric_difference(set_b);
    print(set_c);
    print(set_a ^ set_b);


if __name__ == "__main__":
    run();