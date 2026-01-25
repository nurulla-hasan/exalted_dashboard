import PageLayout from "@/components/common/page-layout";
import PageHeader from "@/components/ui/custom/page-header";
import { FAQCreateModal } from "../../../components/settings/faq/faq-create-modal";

const faqData = [
  {
    id: 1,
    question: "How do I create an account?",
    answer: "To create an account, click the \"Sign Up\" button on our homepage, fill in your details, and follow the instructions to verify your email. Once verified, you can start bidding right away!",
  },
  {
    id: 2,
    question: "How do I place a bid?",
    answer: "Once logged in, browse the auctions and click on the item you're interested in. Enter your bid amount, which must be higher than the current highest bid (or meet the minimum increment). Then, click \"Place Bid\" to confirm.",
  },
  {
    id: 3,
    question: "What happens if I win an auction?",
    answer: "If you are the highest bidder when the auction ends, you will receive a notification with instructions on completing the payment. After payment is received, the seller will ship the item to you.",
  },
  {
    id: 4,
    question: "How do I pay if I win an auction?",
    answer: "Once the auction ends, we will send you an email with instructions on how to complete the payment. Simply follow the payment link and select your preferred payment method to finalize your purchase.",
  },
];

const FAQs = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <PageHeader 
          title="FAQs" 
          showBack={true}
        />
        
        <div className="bg-card rounded-2xl p-6 md:p-10 shadow-sm border border-border/40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
            {faqData.map((faq) => (
              <div key={faq.id} className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground font-medium">Question no: {faq.id}</p>
                  <div className="bg-muted/40 p-4 rounded-xl text-sm text-foreground/80 font-medium">
                    {faq.question}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground font-medium">Answer</p>
                  <div className="bg-muted/40 p-5 rounded-xl text-sm text-foreground/70 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <FAQCreateModal />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FAQs;
