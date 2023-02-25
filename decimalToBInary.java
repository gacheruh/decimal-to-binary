public class decimalToBInary {
    public static void main(String[] args) {
        System.out.println(decimalToBinary(10));
    }

    public static String decimalToBinary(int n){
        String bin = "";
        int quot = n;
        int rem;

        while(quot != 0){
            rem = quot % 2;
            bin = rem + bin;
            quot = quot / 2;
        }

        return bin;
    }
}

