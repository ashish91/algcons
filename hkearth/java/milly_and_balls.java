import java.io.BufferedReader;
import java.io.InputStreamReader;

class TestClass {
    public static void main(String args[] ) throws Exception {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String line = br.readLine();
        String[] sample;
        int t = Integer.parseInt(line);
        BigInteger n, k, sum;
        for (int i = 0; i < t; i++) {
            // Traversing test cases
            line = br.readLine();
            sample = line.split(" ");
            n = new BigInteger(sample[0]);
            k = new BigInteger(sample[1]);

            sum = n.multiply(n.add(BigInteger.valueOf(1))).divide(BigInteger.valueOf(2));
            while(k.compareTo(sum) == 1) {
                k = k.subtract(sum);
            }

            System.out.println(sum.subtract(k));

        }

    }
}
