import Tilt from 'react-parallax-tilt';
import './GlassmorphismCardHoverEffects.css';
import { useResponsiveTSX } from '../../../useResponsiveTSX';

const Plan = ({ name, features }: { name: string, features: string[] }) => (
    <Tilt>
        <div className="Card">
            <div className="Content">
                <h3>{name}</h3>
                <ul>
                    {features.map(feature => (
                        <li key={feature}>{feature}</li>
                    ))}
                </ul>
            </div>
        </div>
    </Tilt>
);

const plans = [
    { name: 'Free Plan', features: ['Personal Brand Assessment', 'Brand Identity Development', 'Social Media Profile Optimization', 'Basic Content Strategy', 'Monthly Progress Report'] },
    { name: 'Basic Plan', features: ['Personal Brand Assessment', 'Brand Identity Development', 'Social Media Profile Optimization', 'Basic Content Strategy', 'Monthly Progress Report'] },
    { name: 'Pro Plan', features: ['Comprehensive Personal Brand Audit', 'Brand Strategy Development', 'Social Media Management', 'Thought Leadership Development', 'Quarterly Strategy Review'] },
    { name: 'Premium Plan', features: ['Personal Brand Immersion', 'Website Development', 'Content Creation and Distribution', 'Influencer Partnerships', 'Personalized Coaching and Mentoring'] },
];

function GlassmorphismCardHoverEffects() {

    const breakpoints = useResponsiveTSX([600, 900, 1200]);

    return (
        <div className={breakpoints <= 1 ? "mobile-view GlassContainer" : "GlassContainer"}>
            {plans.map(plan => (
                <Plan key={plan.name} name={plan.name} features={plan.features} />
            ))}
        </div>
    );
}

export default GlassmorphismCardHoverEffects;