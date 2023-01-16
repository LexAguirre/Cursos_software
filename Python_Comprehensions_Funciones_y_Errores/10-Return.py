def run():
    def sum_with_range(min, max):
        print(min, max);

        sum = 0;

        for x in range(min, max):
            sum += x;
        return (sum);

    result = sum_with_range(1, 10);
    print(result);
    result_v2 = sum_with_range(10, 30);
    print(result_v2);
    result_v3 = sum_with_range(1, 100)  
    print(result_v3);

if __name__ == '__main__':
    run();