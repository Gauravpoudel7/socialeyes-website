import { themeFor } from '../sections.js';

export default function Page() {
  const panel = (id) => ({ className: 'panel', 'data-theme': themeFor(id) });
  return (
    <>
      <div {...panel('top')} id="top">
      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="hero-grid">
          <div className="hero-text">
            <p className="kicker">Global healthcare platform</p>
            <h1>SocialEyes<span className="dot">&#9679;</span><span className="ai">AI</span></h1>
            <p className="sub">Billions of people still face limited access to effective, affordable medical care. SocialEyes MANGO is the first AI-driven platform built to screen, diagnose and help manage dozens of conditions at the scale that problem actually requires.</p>
            <p className="acts">
              <a className="btn" href="#challenges">Start with the problem</a>
              <a className="btn ghost" href="#platform">See the platform</a>
            </p>
          </div>
          <figure className="hero-media">
            <img src="assets/img/hero.png" alt="A dense crowd of commuters at a South Asian railway platform" />
          </figure>
        </div>
      </header>
      
      {/* ============ LEDE ============ */}
      <section className="feature" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="feature-grid">
          <figure className="feature-media">
            <img src="assets/img/girls.png" alt="Two girls sitting on a rock in a field" loading="lazy" decoding="async" />
          </figure>
          <div className="feature-body">
            <h3>Welcome to the real world&hellip;</h3>
            <p>&hellip;where billions of people still face limited access to effective and affordable medical care.</p>
            <p>SocialEyes MANGO is the first AI-driven healthcare platform specifically designed to solve fundamental aspects of this global problem. SocialEyes AI can screen, diagnose and help manage dozens of conditions, and do so economically at the truly massive scale required.</p>
            <p className="ask">What if MANGO's AI-first strategy could boost effective coverage for a wide range of diseases, just about anywhere &mdash; without requiring major capital investment or retraining?</p>
          </div>
        </div>
      </section>
      </div>
      
      {/* ============ CHALLENGES ============ */}
      <section id="challenges" {...panel('challenges')}>
        <header className="sec-head">
          <div className="sec-head-grid">
            <div>
              <p className="eyebrow"><span className="no">01</span> Challenges</p>
              <h2>A new public<br />health reality</h2>
              <p className="q">Chronic, lifestyle-related illness now dominates the healthcare burden in low- and middle-income countries &mdash; and conventional networks were never built for it.</p>
            </div>
            <figure className="sec-head-media"><img src="assets/img/sunrise.png" alt="Sunrise over a hillside village in Nepal" loading="lazy" decoding="async" /></figure>
          </div>
        </header>
      
        <div className="feature">
          <div className="feature-grid rev">
            <figure className="feature-media">
              <img src="assets/img/sunrise.png" alt="Hillside settlement at dawn" loading="lazy" decoding="async" />
            </figure>
            <div className="feature-body">
              <h3>Lifestyle-related illness increasingly dominates the healthcare burden</h3>
              <p>And it does so even in rural areas. This is a radical change from just 20 to 30 years ago. By 2040, around 1 billion people worldwide are expected to have diabetes &mdash; one-third of them in South Asia alone. They are also at risk of silently developing serious visual impairment, even during their working years.</p>
              <p>Conventional healthcare networks are not prepared for this new reality, especially in the conditions prevailing across typical low-resource countries.</p>
              <p className="ask">Could SocialEyes AI screen a billion people a year for potential diabetic eye disease? Yes &mdash; non-invasively, immediately, at the point of care, for negligible marginal cost.</p>
            </div>
          </div>
        </div>
      
        <div className="feature">
          <div className="feature-grid">
            <figure className="feature-media">
              <img src="assets/img/girls.png" alt="Children in a rural field" loading="lazy" decoding="async" />
            </figure>
            <div className="feature-body">
              <h3>Chronic diseases need regular care by specialists. There are never enough.</h3>
              <p>Youngsters in South Asia now have almost a 50% lifetime risk of developing diabetes. In some cities, 22% of those over 30 already have diabetes and 40% have hypertension. Relatively few can be diagnosed or treated in a timely manner.</p>
              <p>Other chronic conditions such as kidney disease and COPD are also rampant &mdash; and unfortunately, most people often have more than one.</p>
              <p className="ask">How could AI make new levels of care available almost anywhere, even for those living at the edge, beyond the reach of conventional healthcare?</p>
            </div>
          </div>
        </div>
      
        <div className="feature">
          <div className="feature-grid rev">
            <figure className="feature-media">
              <img src="assets/img/river.png" alt="A family standing beside a river" loading="lazy" decoding="async" />
            </figure>
            <div className="feature-body">
              <h3>Late diagnosis produces a preponderance of late-stage disease</h3>
              <p>In LMICs, patients often present with progressed illnesses. With diabetic eye problems, once a person begins to notice visual deterioration and decides to seek care, they may already have severe or even proliferative retinopathy. Treatment is expensive; chances of a positive outcome are limited.</p>
              <p>The overall social and economic costs are enormous and rising continually. In Nepal, almost the entire national healthcare insurance budget is consumed by treating chronic kidney disease, with little left to spend on the rest of the population.</p>
              <p className="ask">Why is routine screening and timely diagnosis so difficult to obtain? Several social, structural and economic factors contribute.</p>
            </div>
          </div>
        </div>
      
        <div className="feature">
          <div className="feature-grid">
            <figure className="feature-media">
              <img src="assets/img/ruralmap.png" alt="Travel-time heatmap showing towns far from hospitals and clinics" loading="lazy" decoding="async" />
            </figure>
            <div className="feature-body">
              <h3>For most of the rural population, access is minimal, travel is difficult, and costs are prohibitive</h3>
              <p>The Nepali people are still 60&ndash;70% rural, typical for much of South Asia; there are almost no local doctors serving them.</p>
              <p>Thousands of trips a day must be made to distant district and national hospitals for diagnosis, sometimes unnecessarily. Roads can be impassable for weeks on end. Many cases eventually turn out to be normal or relatively low-risk, which discourages people from coming back.</p>
              <p>Subsidies are limited, and participation in government national insurance schemes is only a fraction of desired levels. Many consumers don't bother renewing their policies.</p>
              <p className="credit">Most towns and market centres (green dots) are hours away (yellow, orange and red areas) from hospitals (large squares) and clinics (small squares).</p>
            </div>
          </div>
        </div>
      
        <div className="feature">
          <div className="feature-grid rev">
            <figure className="feature-media">
              <img src="assets/img/ktmmap.png" alt="Diabetes prevalence heatmap for Kathmandu" loading="lazy" decoding="async" />
            </figure>
            <div className="feature-body">
              <h3>In dense cities, consumers still face serious obstacles getting to care</h3>
              <p>Transiting typical South Asian urban centres &mdash; most laid out in medieval times &mdash; can easily take an hour or more, given frequent traffic jams as well as months of monsoon rains.</p>
              <p>Initial assessment of possible diabetes-related eye disease often requires two or three appointments, each taking half a day or more including waiting time in crowded facilities, and transit. This routine runs up a substantial bill.</p>
              <p>Not surprisingly, even in capital cities, effective coverage is perhaps 10%, maybe less. Chronic disease cases are already overwhelming existing facilities, which lowers quality of service and certainly frustrates consumers.</p>
              <p className="credit">In the past 20+ years, the population of Kathmandu has tripled and shifted an hour or more away from existing eye hospitals. Diabetes prevalence heatmap compiled from a recent RAAB survey (NNJS and IAPB, 2024).</p>
            </div>
          </div>
        </div>
      
        <div className="feature" style={{ borderBottom: 0 }}>
          <div className="feature-grid">
            <figure className="feature-media">
              <img src="assets/img/market.png" alt="A market vendor using a mobile phone to take payment" loading="lazy" decoding="async" />
            </figure>
            <div className="feature-body">
              <h3>Consumers are changing. Healthcare options have stayed the same.</h3>
              <p>Access to competent, locally available, affordable care lags far behind overall social and economic progress in the region.</p>
              <p>Consumer preferences, expectations and behaviour are much different from even ten years ago. Newfound purchasing power, mobile banking and remittance transfers could transform healthcare delivery; providing services as essentially a consumer product could be a more reliable source of funding than government budgets, charitable giving or aid.</p>
              <p className="ask">What if AI-enabled services offered as much perceived value, and scaled as easily, as Amazon or Netflix? Access to care could be just a QR code away.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* ============ SOLUTIONS ============ */}
      <section id="solutions" {...panel('solutions')}>
        <header className="sec-head">
          <div className="sec-head-grid">
            <div>
              <p className="eyebrow"><span className="no">02</span> Solutions</p>
              <h2>SocialEyes MANGO<br />serves people<br />wherever they are</h2>
              <p className="q">And that's not likely to be in a conventional hospital or clinic.</p>
            </div>
            <figure className="sec-head-media"><img src="assets/img/crowd.png" alt="A crowd gathered at an outreach camp" loading="lazy" decoding="async" /></figure>
          </div>
        </header>
      
        <div className="plain">
          <div className="wrap">
            <div className="narrow">
              <p className="eyebrow">Manufacturing capacity</p>
              <h3>The platform combines mobile medical devices, autonomous AI assessment and language models to replicate clinical skills at arbitrary scale.</h3>
              <p>SocialEyes MANGO increases access to care from remote, rural communities to densely populated inner-city neighbourhoods. In effect, it manufactures healthcare capacity where none exists.</p>
              <p>MANGO in some important ways resembles social networks and online merchandising: it makes low-cost goods and services widely available to the public, while accumulating large amounts of consumer behaviour and demographic information.</p>
            </div>
            <ul className="figs">
              <li><b>800+</b><span>Administrative units in Nepal that could each host a SocialEyes presence, cutting travel from hours to minutes</span></li>
              <li><b>Hundreds/day</b><span>People one frontline worker can screen non-invasively with shirt-pocket-sized devices now in development, largely without expensive consumables</span></li>
              <li><b>Minutes</b><span>Time to detect dozens of diseases and risk factors in one sitting &mdash; with lower carbon emissions too</span></li>
              <li><b>Encrypted</b><span>Every patient dataset biometrically tagged for privacy and instant retrieval at any SocialEyes location</span></li>
            </ul>
          </div>
        </div>
      
        {/* detection set-piece */}
        <div className="showcase" id="detect">
          <div className="wrap">
            <div className="showcase-head">
              <p className="eyebrow">AI at the point of care</p>
              <h3>Dozens of diseases and risk factors, detected in a few minutes</h3>
              <p>An illustrative look at the triage output produced while screening a queue at an outreach camp.</p>
            </div>
            <div className="frame">
              <img src="assets/img/crowd2.png" alt="A crowd at an outreach camp with AI detection overlays indicating risk" loading="lazy" decoding="async" />
              <div className="retic" style={{ '--c': '#F2A104', left: '14.3%', top: '10.5%', width: '7%', height: '13.5%', animationDelay: '.15s' }}>
                <i></i><i></i><i></i><i></i><b>&uarr; Blood pressure</b>
              </div>
              <div className="retic" style={{ '--c': '#4A7538', left: '39.5%', top: '33%', width: '6.8%', height: '13%', animationDelay: '.45s' }}>
                <i></i><i></i><i></i><i></i><b>Normal</b>
              </div>
              <div className="retic" style={{ '--c': '#C1512F', left: '54.5%', top: '30%', width: '6.5%', height: '12%', animationDelay: '.75s' }}>
                <i></i><i></i><i></i><i></i><b>Retinopathy</b>
              </div>
              <div className="retic up" style={{ '--c': '#C1512F', left: '62.5%', top: '44%', width: '7%', height: '13.5%', animationDelay: '1.05s' }}>
                <i></i><i></i><i></i><i></i><b>Diabetes &middot; Kidney disease</b>
              </div>
              <div className="retic up" style={{ '--c': '#F2A104', left: '50.3%', top: '60%', width: '7.6%', height: '14.5%', animationDelay: '1.35s' }}>
                <i></i><i></i><i></i><i></i><b>&uarr;&uarr; Blood sugar</b>
              </div>
              <div className="retic rt" style={{ '--c': '#F2A104', left: '75.5%', top: '16%', width: '6%', height: '11%', animationDelay: '1.65s' }}>
                <i></i><i></i><i></i><i></i><b>Sickle cell screen</b>
              </div>
            </div>
            <div className="readout">
              <span className="tag hi">Urgent &mdash; transfer to clinic now</span>
              <span className="tag hi">Retinopathy</span>
              <span className="tag hi">&uarr;&uarr;&uarr; Blood pressure</span>
              <span className="tag md">&uarr;&uarr; Blood sugar</span>
              <span className="tag md">&uarr; Creatinine</span>
              <span className="tag md">&uarr; BMI</span>
              <span className="tag">Diabetes</span>
              <span className="tag">Kidney disease</span>
              <span className="tag">Sickle cell</span>
            </div>
            <p className="frame-caption">Each patient dataset is encrypted and biometrically tagged, ensuring privacy while enabling immediate retrieval at every visit to a SocialEyes-equipped location.</p>
          </div>
        </div>
      
        <div className="feature" style={{ borderBottom: 0 }}>
          <div className="feature-grid rev">
            <figure className="feature-media">
              <img src="assets/img/bagmati.png" alt="Map of Bagmati Province showing cataract and diabetes case density" loading="lazy" decoding="async" />
            </figure>
            <div className="feature-body">
              <h3>Millions of curated medical datasets every year</h3>
              <p>&hellip;along with continuously reporting performance indicators such as disease incidence, waiting times, throughput, outcomes and revenue.</p>
              <p>Centralised monitoring and quality control using AI-enabled tools helps optimise safety and effectiveness. If there's a sudden surge in cases, public health authorities know immediately, before an outbreak can become a major crisis.</p>
              <p>Presently, epidemiological data collection and reporting are usually after-the-fact, and sometimes results are delayed for years. With SocialEyes, users know who has what, where, and probably why, 24/7.</p>
              <p className="credit">Red circles reflect the number of cataract cases per sample site; blue circles indicate prevalence of diabetes and associated eye diseases in Bagmati Province, Nepal (NNJS and IAPB, 2024).</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* ============ PLATFORM ============ */}
      <section id="platform" {...panel('platform')}>
        <header className="sec-head">
          <div className="sec-head-grid">
            <div>
              <p className="eyebrow"><span className="no">03</span> Platform</p>
              <h2>One platform,<br />village to specialist</h2>
              <p className="q">MANGO bridges the gaps between primary care and tertiary services by pushing specialist skills out to the edges.</p>
            </div>
            <figure className="sec-head-media"><img src="assets/img/phone.png" alt="A health worker showing a device to an older woman" loading="lazy" decoding="async" /></figure>
          </div>
        </header>
      
        <div className="plain alt">
          <div className="wrap">
            <div className="narrow">
              <h3>Connecting every level of care vertically ensures a two-way flow of information &mdash; down to at-home monitoring, and eventually virtual hospital services.</h3>
              <p>Every level of care needs a tailored range of AI-mediated skills. Those suitable for village <i>aashas</i> and urban neighbourhood clinics identify potential at-risk cases early, getting them into the healthcare pipeline before serious complications arise. This front end is the first step to improving effective coverage, using AI to help deliver better care everywhere, and at scale.</p>
            </div>
            <div className="cards">
              <article className="card">
                <img src="assets/img/frontline.png" alt="A frontline worker showing results on a tablet" loading="lazy" decoding="async" />
                <div className="body">
                  <span className="rank">At the edge</span>
                  <h4>Frontline workers</h4>
                  <p>Equipped with AI-ready devices, they screen, educate consumers about their own health, and explain the benefits of participating in recommended treatment.</p>
                </div>
              </article>
              <article className="card">
                <img src="assets/img/primary.png" alt="A primary care consultation" loading="lazy" decoding="async" />
                <div className="body">
                  <span className="rank">Close to home</span>
                  <h4>Primary care</h4>
                  <p>MANGO gives primary care physicians and nurses a variety of new AI-enabled diagnostic skills, letting them provide better care much closer to where people live.</p>
                </div>
              </article>
              <article className="card">
                <img src="assets/img/tertiary.png" alt="Specialists reviewing cases together" loading="lazy" decoding="async" />
                <div className="body">
                  <span className="rank">Tertiary</span>
                  <h4>Specialist services</h4>
                  <p>Advanced diagnostic and decision support tools let specialists spend more of their time serving the patients who need their highest and best skills.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      
        {/* reach map removed: heading text kept */}
        <div className="showcase" id="reach">
          <div className="wrap">
            <div className="showcase-head" style={{ marginBottom: 0 }}>
              <p className="eyebrow">Built to scale</p>
              <h3>MANGO can integrate entire healthcare ecosystems</h3>
              <p>Illustrative hub clinics, outreach camps and mobile teams across a SocialEyes network, all pooling information via secure networks.</p>
            </div>
          </div>
        </div>
      
        <div className="feature" style={{ borderBottom: 0 }}>
          <div className="feature-grid">
            <figure className="feature-media">
              <img src="assets/img/nepaltopo.png" alt="Topographic map of Nepal with distributed service points" loading="lazy" decoding="async" />
            </figure>
            <div className="feature-body">
              <h3>A horizontal and a longitudinal continuum of care</h3>
              <p>MANGO establishes a horizontal, geographical continuum of care: from conventional fixed-base facilities to mobile teams running outreach camps in villages and urban neighbourhoods. All deliver consistent, quality services, pooling the resulting information via secure networks.</p>
              <p>MANGO also enables a continuum of care over time. Millions of multi-modality, longitudinal, curated datasets let SocialEyes AI analytics identify clinical subgroups, mass-personalise care, and continuously improve system performance and efficiency.</p>
              <p className="ask">Unlike conventional healthcare, SocialEyes thrives on scale: the more people in the system, the better the results for all.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* ============ TECHNOLOGY ============ */}
      <section id="technology" {...panel('technology')}>
        <header className="sec-head">
          <div className="sec-head-grid">
            <div>
              <p className="eyebrow"><span className="no">04</span> Technology</p>
              <h2>A deep<br />technology play</h2>
              <p className="q">Starting with ultra-wide-field retinal scans &mdash; an underused window onto the whole body.</p>
            </div>
            <figure className="sec-head-media"><img src="assets/img/eye.png" alt="Close-up of a human eye" loading="lazy" decoding="async" /></figure>
          </div>
        </header>
      
        <div className="feature">
          <div className="feature-grid">
            <figure className="feature-media">
              <img src="assets/img/eye.png" alt="Close-up of a human eye" loading="lazy" decoding="async" />
            </figure>
            <div className="feature-body">
              <h3>SocialEyes is a deep technology play</h3>
              <p>Each AI-ready dataset from an ultra-wide-field retinal scan captures a wide range of conventional disease signatures along with a variety of abstract, quantitative parameters which drive advanced AI tools and capabilities.</p>
              <p>Both visible and latent parameters are collected, not just colour and depth. These form the inputs to SocialEyes AI classifiers and language models, which evaluate relevant clinical findings, suggest diagnoses, and provide granular, personalised decision support.</p>
              <p>SocialEyes PACS infrastructure can readily accept other imaging modalities such as ultrasound, X-ray, CT and MRI. These contribute to even better diagnostic accuracy, and are a natural path for extending the MANGO platform into the broader arena of general care.</p>
            </div>
          </div>
        </div>
      
        <div className="feature">
          <div className="feature-grid rev">
            <figure className="feature-media">
              <img src="assets/img/retina.png" alt="Ultra-wide-field colour retinal scan" loading="lazy" decoding="async" />
            </figure>
            <div className="feature-body">
              <h3>The human retina is presently an underutilised source of clinical findings &mdash; including for systemic disease</h3>
              <p>The retina is an extension of the brain. Its fine capillaries and nerves can be easily damaged by diseases such as diabetes and hypertension, which affect the vascular system.</p>
              <p>Next-generation SocialEyes MARVEL scanners, now under development, generate first-in-the-world multimodal hyperspectral datasets from the retina and other tissues.</p>
              <p>These in turn inform portable personal language models representing the medical condition and history of each consumer. That information is used to build and query population-scale large language models which deliver in-depth recommendations.</p>
            </div>
          </div>
        </div>
      
        <div className="feature">
          <div className="feature-grid">
            <figure className="feature-media">
              <img src="assets/img/heatmap.png" alt="AI heatmap highlighting retinal lesions" loading="lazy" decoding="async" />
            </figure>
            <div className="feature-body">
              <h3>Close to 70 clinically useful AI retinal classifiers, already built</h3>
              <p>Their performance typically exceeds current standards of care, based on evidence gathered from a 23,000+ person US retrospective registry pilot.</p>
              <p>SocialEyes AI is generalised: it will detect ophthalmic maladies as well as many systemic conditions such as kidney failure, cardiovascular disease, hypertension and COPD.</p>
              <p>SocialEyes is also pioneering continuous, precision predictive variables that show trends and early onset of disease, potentially long before categorical changes manifest.</p>
              <p className="credit">This heatmap shows moderate, non-proliferative diabetic retinopathy (NPDR). Risk of progression at this stage is often high, requiring follow-up assessment and referral to tertiary care.</p>
            </div>
          </div>
        </div>
      
        <div className="feature" style={{ borderBottom: 0 }}>
          <div className="feature-grid rev">
            <figure className="feature-media">
              <img src="assets/img/satellite2.png" alt="Satellite view of South Asia" loading="lazy" decoding="async" />
            </figure>
            <div className="feature-body">
              <h3>Across entire regions, cases are evaluated in a systematic manner</h3>
              <p>This ensures consistent, high-quality medical records which accurately reflect clinical conditions in the field.</p>
              <p>Automated and largely autonomous assessment skills screen for relevant risk factors, and assess an open-ended range of the infectious, genetic, physiological and mental illnesses prevalent in a given public health ecosystem.</p>
              <p>Over time, accumulated datasets and analytic tools continually improve system performance. Increasing accuracy, at scale, results in thousands of additional people being diagnosed correctly and reported every day.</p>
            </div>
          </div>
        </div>
      
        <div className="cat">
          <div className="cat-grid">
            <div className="cat-head">
              <p className="eyebrow">Open-ended coverage</p>
              <h3>An open-ended range of conditions, screened from the same encounter</h3>
              <p>SocialEyes AI assesses risk factors alongside infectious, genetic, physiological and mental illness, and standardises ICD-10 coding right from the mobile device.</p>
              <figure className="cat-media"><img src="assets/img/ruralmap.png" alt="Field screening heatmap" loading="lazy" decoding="async" /></figure>
            </div>
            <div>
              <div className="catrow">
                <h4>Risk factors</h4>
                <div className="chips">
                  <span className="chip t">Age</span><span className="chip t">Blood pressure</span><span className="chip t">Blood sugar</span><span className="chip t">BMI</span><span className="chip t">Cardiac event</span><span className="chip t">Ethnicity</span><span className="chip t">Sex</span><span className="chip t">Smoking</span>
                </div>
              </div>
              <div className="catrow">
                <h4>Infectious</h4>
                <div className="chips">
                  <span className="chip p">Chikungunya</span><span className="chip p">Congo fever</span><span className="chip p">COVID</span><span className="chip p">Dengue fever</span><span className="chip p">Ebola</span><span className="chip p">Encephalitis</span><span className="chip p">Giardia</span><span className="chip p">Hepatitis</span><span className="chip p">HIV</span><span className="chip p">Influenza</span><span className="chip p">Leishmaniasis</span><span className="chip p">Leptospirosis</span><span className="chip p">Lyme disease</span><span className="chip p">Malaria</span><span className="chip p">Rift Valley fever</span><span className="chip p">Spotted fever</span><span className="chip p">Toxoplasmosis</span><span className="chip p">TB</span><span className="chip p">Typhoid fever</span><span className="chip p">Typhus</span><span className="chip p">West Nile virus</span><span className="chip p">Yellow fever</span><span className="chip p">Zika</span>
                </div>
              </div>
              <div className="catrow">
                <h4>Genetic</h4>
                <div className="chips">
                  <span className="chip g">Coat's disease</span><span className="chip g">Sickle cell anaemia</span><span className="chip g">Retinitis pigmentosa</span><span className="chip g">Stargardt disease</span><span className="chip g">Best vitelliform</span>
                </div>
              </div>
              <div className="catrow">
                <h4>Physiological</h4>
                <div className="chips">
                  <span className="chip m">Alzheimer's</span><span className="chip m">Cataract</span><span className="chip m">Concussion</span><span className="chip m">COPD</span><span className="chip m">Diabetes</span><span className="chip m">Glaucoma</span><span className="chip m">Hypertension</span><span className="chip m">Kidney disease</span><span className="chip m">Macular oedema</span><span className="chip m">Multiple sclerosis</span><span className="chip m">Parkinson's</span><span className="chip m">Retinopathy</span><span className="chip m">Stroke</span>
                </div>
              </div>
              <div className="catrow" style={{ marginBottom: 0 }}>
                <h4>Mental</h4>
                <div className="chips">
                  <span className="chip r">Bipolar</span><span className="chip r">Dementia</span><span className="chip r">Depression</span><span className="chip r">Schizophrenia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="plain alt">
          <div className="wrap narrow">
            <p className="eyebrow">ICD-10</p>
            <h3>AI standardises the mapping of ICD-10 codes across nations and regions</h3>
            <p>Manual logging of ICD codes is time-consuming, difficult and frequently avoided. Selecting which of the 23,000+ possibilities to use is a task few enjoy.</p>
            <p>SocialEyes builds this in right from the mobile device, which helps frontline workers report incidence information accurately. It also lays the foundation for global health research and clinical trials, an important source of expertise and revenue. Every region using SocialEyes generates information the same way, which allows meaningful comparison between different areas.</p>
          </div>
        </div>
      </section>
      
      {/* ============ SOCIAL BENEFITS ============ */}
      <section id="benefits" {...panel('benefits')}>
        <header className="sec-head">
          <div className="sec-head-grid">
            <div>
              <p className="eyebrow"><span className="no">05</span> Social benefits</p>
              <h2>Achieving key<br />development goals</h2>
              <p className="q">Beyond raising effective coverage, SocialEyes transforms the workforce so it aligns realistically with the public health challenges at hand.</p>
            </div>
            <figure className="sec-head-media"><img src="assets/img/staff.png" alt="Young healthcare assistants in clinical coats" loading="lazy" decoding="async" /></figure>
          </div>
        </header>
      
        <div className="feature">
          <div className="feature-grid rev">
            <figure className="feature-media">
              <img src="assets/img/staff.png" alt="Healthcare assistants trained to operate SocialEyes devices" loading="lazy" decoding="async" />
            </figure>
            <div className="feature-body">
              <h3>A career path, mostly for young women</h3>
              <p>SocialEyes will be operated primarily by thousands of young women &mdash; typically high-school graduates with three or more years of formal training, plus new electives on chronic disease and AI skills. This is a strong in-country career opportunity that brings social and economic benefits to the nation.</p>
              <p>Healthcare and ophthalmic assistants can be trained relatively quickly and inexpensively compared with physicians, let alone specialists. With SocialEyes AI, they can play a major role in reducing the rising burdens caused by chronic disease.</p>
            </div>
          </div>
        </div>
      
        <div className="feature">
          <div className="feature-grid">
            <figure className="feature-media">
              <img src="assets/img/tharu.png" alt="Members of a Tharu community outside their homes" loading="lazy" decoding="async" />
            </figure>
            <div className="feature-body">
              <h3>Built to serve isolated and marginalised communities</h3>
              <p>MANGO is inherently well suited to communities such as the two million-plus Tharu people living along the southern border areas of Nepal.</p>
              <p>They have almost no access to medical care but are at high risk of debilitating sickle cell anaemia and related blood diseases. With SocialEyes AI screening and genetic counselling of adolescents, there is a way forward to better health for the entire community &mdash; as well as for even larger at-risk populations in India and Africa.</p>
            </div>
          </div>
        </div>
      
        <div className="feature" style={{ borderBottom: 0 }}>
          <div className="feature-grid rev">
            <figure className="feature-media">
              <img src="assets/img/climate.png" alt="A glacial lake in the Himalaya" loading="lazy" decoding="async" />
            </figure>
            <div className="feature-body">
              <h3>South Asia is already seeing the consequences of climate change</h3>
              <p>These drive the intensity of seasonal disease epidemics, as well as causing them to appear in new areas, typically without adequate medical resources.</p>
              <p>Changing patterns of rainfall, habitation, transportation and temperature, as well as dramatically increasing pollution even in the hinterlands, are already radically altering the healthcare landscape.</p>
              <p className="ask">SocialEyes AI lets public health agencies anticipate and visualise what's happening, so they can take mitigating steps before a situation gets out of control.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* ============ EXPERIENCE ============ */}
      <section id="experience" {...panel('experience')}>
        <header className="sec-head">
          <div className="sec-head-grid">
            <div>
              <p className="eyebrow"><span className="no">06</span> Experience</p>
              <h2>Delivering value<br />to the consumers</h2>
              <p className="q">Open, inviting, comfortable buildings with responsive, well-equipped staff &mdash; because a positive consumer experience is not a luxury, it is what brings people back.</p>
            </div>
            <figure className="sec-head-media"><img src="assets/img/clinic.png" alt="Rendering of a SocialEyes clinic exterior" loading="lazy" decoding="async" /></figure>
          </div>
        </header>
      
        <div className="feature">
          <div className="feature-grid">
            <figure className="feature-media">
              <img src="assets/img/clinic.png" alt="Rendering of a SocialEyes clinic and the people arriving at it" loading="lazy" decoding="async" />
            </figure>
            <div className="feature-body">
              <h3>Clinics that embody traditional South Asian architectural principles</h3>
              <p>SocialEyes AI clinics create a healing environment for all who visit and work in them. Open, inviting, comfortable buildings with responsive, well-equipped staff are essential for ensuring a positive consumer experience.</p>
              <p>The SocialEyes built environment even has a low emission profile. Extensive use is made of engineered timber products and other natural materials from the region, which produce a negligible carbon footprint throughout the building lifecycle.</p>
            </div>
          </div>
        </div>
      
        <div className="feature">
          <div className="feature-grid rev">
            <figure className="feature-media">
              <img src="assets/img/plan.png" alt="Cutaway model showing the layout of a SocialEyes clinic" loading="lazy" decoding="async" />
            </figure>
            <div className="feature-body">
              <h3>The foundation for delivering highly effective, integrated care everywhere</h3>
              <p>The staff, skills and equipment needed for initial assessment and routine management are now all in one location. This approach greatly reduces operating costs, as well as time and out-of-pocket expense for consumers, compared with the conventional referral workflow.</p>
              <p>SocialEyes has already developed extensive digital-twin operational performance and financial models for multi-site MANGO healthcare networks. These models suggest that AI-mediated medical services could be delivered for as little as one-tenth the cost to consumers compared with existing methods.</p>
              <p className="ask">That is a major step change in the underlying healthcare economics.</p>
            </div>
          </div>
        </div>
      
        <div className="feature">
          <div className="feature-grid">
            <figure className="feature-media">
              <img src="assets/img/interior.jpeg" alt="Interior of a SocialEyes clinic with open workstations" loading="lazy" decoding="async" />
            </figure>
            <div className="feature-body">
              <h3>From intake processing to exit interview, fast one-stop service</h3>
              <p>Flexible, open floor plans and a circular, workstation-focused flow allow collaboration and higher throughput. The consumer experience is radically better than at existing healthcare facilities.</p>
              <p>Integrated telemedicine consultations bringing in expert advice are available inline, for handling complex cases before a person leaves and potentially becomes lost to follow-up.</p>
              <p>Continuing contact while at home is critical. The staff includes social workers who can help with logistics, as well as coordinate locally available resources.</p>
            </div>
          </div>
        </div>
      
        <div className="feature">
          <div className="feature-grid rev">
            <figure className="feature-media">
              <img src="assets/img/education.png" alt="A consumer reading a wall display about diabetes" loading="lazy" decoding="async" />
            </figure>
            <div className="feature-body">
              <h3>Consumer education is sorely lacking in most conventional healthcare networks</h3>
              <p>Many people are simply not aware they could do more to improve their health &mdash; if they knew what to do.</p>
              <p>Line physicians must handle an enormous number of cases every day, which limits the opportunity to answer questions. Those in their care are often deferential and reluctant to discuss concerns or options.</p>
              <p>Management of chronic disease is further complicated by the fact that many cases have multiple conditions. Well-informed consumers can be a major positive factor in achieving better outcomes.</p>
            </div>
          </div>
        </div>
      
        <div className="feature" style={{ borderBottom: 0 }}>
          <div className="feature-grid">
            <figure className="feature-media">
              <img src="assets/img/consult.jpeg" alt="A consultation desk inside a SocialEyes clinic" loading="lazy" decoding="async" />
            </figure>
            <div className="feature-body">
              <h3>Secure access to medical information is essential for personalising care</h3>
              <p>Whenever someone comes to a SocialEyes AI facility, routine retinal-image-based biometric authentication confirms their identity, and their records are immediately available for review.</p>
              <p>Presently, almost all healthcare information &mdash; images, lab reports, hand-written notes &mdash; is handed over to the patients, who save these materials in cardboard folders or plastic envelopes.</p>
              <p>If they are lost or damaged, the entire process has to start over. And the knowledge from millions of cases is unavailable.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* ============ CONNECT ============ */}
      <section id="connect" {...panel('connect')}>
        <header className="sec-head">
          <div className="sec-head-grid">
            <div>
              <p className="eyebrow"><span className="no">07</span> Connect</p>
              <h2>SocialEyes AI enables<br />healthcare collaboration</h2>
              <p className="q">Successful innovation requires healthcare leaders across the region who guide change management and organise large-scale, million-person deployments.</p>
            </div>
            <figure className="sec-head-media"><img src="assets/img/meeting.png" alt="Healthcare leaders in discussion around a table" loading="lazy" decoding="async" /></figure>
          </div>
        </header>
      
        <div className="feature">
          <div className="feature-grid">
            <figure className="feature-media">
              <img src="assets/img/meeting.png" alt="SocialEyes principals meeting clinical and government partners" loading="lazy" decoding="async" />
            </figure>
            <div className="feature-body">
              <h3>Decades of on-the-ground experience across South Asia</h3>
              <p>Large-scale deployments help demonstrate the broad range of benefits for consumers, providers, local and national governments, as well as other stakeholders.</p>
              <p>SocialEyes principals already have decades of on-the-ground experience across the region, resulting in trust relationships with clinical networks, local and national governments, along with the NGOs.</p>
              <p>Starting from the eye care issues caused by chronic disease and other conditions, SocialEyes and its partners will gradually expand into general care hospitals and clinics.</p>
            </div>
          </div>
        </div>
      
        <div className="feature">
          <div className="feature-grid rev">
            <figure className="feature-media">
              <img src="assets/img/academy.png" alt="Rendering of a SocialEyes academy building" loading="lazy" decoding="async" />
            </figure>
            <div className="feature-body">
              <h3>SocialEyes academies will train the next generation of AI healthcare professionals</h3>
              <p>These facilities combine an active in-house clinic, open to the public, with academic education, training, and incubator resources for student research projects.</p>
              <p>They will also house national and regional AI telemedicine centres, along with platform administration and help desks &mdash; for consumers as well as for the institutional users of SocialEyes data analytic services.</p>
            </div>
          </div>
        </div>
      
        <div className="feature" style={{ borderBottom: 0 }}>
          <div className="feature-grid">
            <figure className="feature-media">
              <img src="assets/img/team.png" alt="The SocialEyes team" loading="lazy" decoding="async" />
            </figure>
            <div className="feature-body">
              <h3>SocialEyes builds healthcare innovation across all of South Asia&hellip;</h3>
              <p>&hellip;and the rest of the LMIC world. SocialEyes staff, interns and associates come from many countries, and represent a wide range of social and educational backgrounds.</p>
              <p>Healthcare assistants, doctors, computer engineers, environmental scientists, lawyers, teachers, nurses, social workers and entrepreneurs can all make meaningful contributions.</p>
            </div>
          </div>
        </div>
      
        <div className="contact">
          <div className="contact-grid">
            <figure className="contact-media"><img src="assets/img/summit.png" alt="Himalayan peaks" loading="lazy" decoding="async" /></figure>
            <div className="contact-body">
              <h3>Come connect with us and start building a future with better healthcare for all.</h3>
              <p>Whether you lead a clinical network, work in public health, fund development, or want to build the technology &mdash; tell us where you fit and we'll be in touch.</p>
              <p className="sig">SocialEyes is AI for good.</p>
              <form id="contact">
                <div className="field"><label htmlFor="f-name">Name</label><input id="f-name" name="name" type="text" autoComplete="name" required /></div>
                <div className="field"><label htmlFor="f-mail">E-mail</label><input id="f-mail" name="email" type="email" autoComplete="email" required /></div>
                <div className="field"><label htmlFor="f-aff">Affiliation</label><input id="f-aff" name="affiliation" type="text" autoComplete="organization" /></div>
                <div className="field"><label htmlFor="f-msg">Message</label><textarea id="f-msg" name="message"></textarea></div>
                <button className="btn" type="submit">Send message</button>
                <p className="formnote" id="formnote">This opens your e-mail app with the message ready to send.</p>
              </form>
            </div>
          </div>
        </div>
      
        <div className="close">
          <figure className="close-media"><img src="assets/img/summit.png" alt="Himalayan peaks at dusk" loading="lazy" decoding="async" /></figure>
          <p className="mark2">SocialEyes<span className="dot">&#9679;</span><span className="ai">AI</span></p>
          <p className="tag">Global healthcare platform</p>
        </div>

      <footer>
        <div className="wrap">
          <p className="legal">This document is for informational purposes only and is not a solicitation for investments or any other purposes. It is strictly privileged and confidential and may not be transferred or shared with any other persons or parties without the express prior consent of SocialEyes&reg; Corporation. This document represents and contains throughout &ldquo;trade secrets&rdquo; of SocialEyes under all applicable laws, regulations, treaties and statutes, including without limitation the Defend Trade Secrets Act of 2016, as amended, 18 U.S.C. &sect;&sect; 1839 et seq.; the Economic Espionage Act, as amended, 18 U.S.C. &sect;&sect; 1831&ndash;39; the Uniform Trade Secrets Act as adopted in several U.S. states; the Directive on the Protection of Trade Secrets adopted by the European Union on 27 May 2016, as amended; and the World Trade Organization&rsquo;s Agreement on Trade-Related Aspects of Intellectual Property Rights, as amended (&ldquo;TRIPS&rdquo;).</p>
          <p style={{ margin: 0 }}>&copy; SocialEyes&reg; Corporation</p>
        </div>
      </footer>
      </section>
    </>
  );
}
