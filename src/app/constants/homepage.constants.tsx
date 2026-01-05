import { PILL_ICON, PULSE_ICON, SYNC_ICON, WARNING_ICON } from "./icon.constants"

export const spinalFusionVideoURL = "https://player.vimeo.com/video/1090240815?h=b5b40eb494"
export const postOpExpectationVideoURL = "https://player.vimeo.com/video/1089895175?h=630a019bd7"
export const riskVideoURL = "https://player.vimeo.com/video/1089895107?h=daaa32ccb7"
export const adviceWorkerVideoURL = "https://player.vimeo.com/video/1089895049?h=8e9d275556"
export const lowBackPainVideoURL = "https://player.vimeo.com/video/1089894992?h=9e26728ce6"
export const keyPointsList = [
    "Around 1 in 7 chance you'll have worse pain than before the fusion surgery",
    "Less than 50% chance that the fusion operation will resolve your low back pain",
    "More than 1 in 5 chance you'll require another fusion or more back surgery",
    "Up to 30% chance that you'll suffer from Adjacent Segment Disease (Dr Stanford explains more about ASD in this video)"
]

export const gridFaqList = [
    {
        icon: <WARNING_ICON width="24" height="24" className="w-12 h-12 mb-4"/>,
        title: "Why do 20% of patients need more surgery after spinal fusion?",
        desc: "Revision surgery may be needed due to complications, hardware failure, or ongoing pain."
    },
    {
        icon: <SYNC_ICON width="24" height="24" className="w-12 h-12 mb-4" />,
        title: "Why is the recovery rate so limited (25% within 2 years)?",
        desc: "Recovery is complex and influenced by multiple factors including surgical approach, patient health, and rehabilitation compliance."
    },
    {
        icon: <PULSE_ICON width="24" height="24" className="w-12 h-12 mb-4" />,
        title: "Why do most patients need ongoing medication and physiotherapy?",
        desc: "Spinal fusion often doesn't address all pain sources and can create new mechanical challenges."
    },
    {
        icon: <PILL_ICON width="24" height="24" className="w-12 h-12 mb-4" />,
        title: "Should I get a second opinion?",
        desc: "Yes, seeking a second opinion is highly recommended before proceeding with spinal fusion surgery.",
    }
]

export const researchEvidenceList = [
    {
        url: 'https://www.sydney.edu.au/medicine-health/news-and-events/news/2022/04/12/orthopaedic-surgeries-doing-more-harm-than-good.html',
        text: 'University of Sydney - Orthopaedic surgeries doing more harm than good',
    },
    {
        url: 'https://www.choosingwisely.org.au/recommendations/fpm5',
        text: 'Choosing Wisely Australia - Recommendations on spinal fusion',
    },
    {
        url: 'https://www.unsw.edu.au/newsroom/news/2018/02/spinal-fusion-surgery-for-lower-back-pain--it-s-costly-and-there',
        text: "UNSW - Spinal fusion surgery for lower back pain: it's costly and there's little evidence it'll work"
    },
    {
        url: 'https://www.safercare.vic.gov.au/best-practice-improvement/clinical-guidance/non-urgent-elective-surgery/spinal-fusion-for-chronic-axial-low-back-pain',
        text: 'Safer Care Victoria - Spinal fusion for chronic axial low back pain'
    },
    {
        url: 'https://www.betterhealth.vic.gov.au/best-care-guidance-non-urgent-planned-surgery',
        text: 'Better Health Victoria - Best care guidance for non-urgent planned surgery'
    }
]