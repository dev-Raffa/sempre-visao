import TestimonialCarousel from "../../testemonial";
import "./styles.scss";

export const TestimonialSection = ()=>{
    return(
        <section id= "TestimonialSection">
            <div>
                <h2>O que os nossos pacientes estão dizendo</h2>
            </div>

            <TestimonialCarousel />
        </section>

    )
}