import { loadStripe } from "@stripe/stripe-js";
import DashboardContainer from "../Shared/Container/DashboardContainer";
import { Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// Add publishable key from stripe
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {

    return (
        <div className="bg-[#363f4f] w-full pb-20 min-h-screen">
            <DashboardContainer>
                <p className=" text-white">Payment for Booking ...</p>

                {/* Payment order */}
                <div className="mt-10 bg-[#4b5669] p-5 md:p-10 rounded-md">
                    <Elements stripe={stripePromise}>
                    <CheckoutForm />
                    </Elements>
                </div>
            </DashboardContainer>
        </div>
    );
};

export default Payment;