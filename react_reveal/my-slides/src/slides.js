// src/Slides.js
import React from 'react';
import { Reveal, Slide } from 'react-revealjs';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css'; // Choose your theme

function Slides() {
  return (
    <Reveal>
      <Slide>
        <header>
          <h1>What is Public Policy?</h1>
          <p>POSC 315: Introduction to Public Policy</p>
          <p>David P. Adams, Ph.D.</p>
          <p>2024-08-29</p>
        </header>
      </Slide>

      <Slide>
        <h2>What is Public Policy?</h2>
        <h3><strong>Week 1</strong></h3>
        <img src="images/policy_deco.png" alt="Public Policy" style={{ width: "40%" }} />
      </Slide>

      <Slide>
        <h2>What is Public Policy?</h2>
        <p><strong>Public Policy</strong> is what officials within government, and by extension the citizens they represent, choose to do or not to do about public problems.</p>
        <p><strong>There’s no single definition of public policy.</strong> It’s a complex and multifaceted concept that can be understood in many ways.</p>
      </Slide>

      <Slide>
        <h2>Defining the Field(s) of Policy Studies</h2>
        <ul>
          <li><strong>Policy studies</strong> is an interdisciplinary field that examines both the content and process of public policies.</li>
          <li>Smith and Larimer emphasize that it encompasses multiple subfields:</li>
          <ul>
            <li><strong>Policy Analysis:</strong> Evaluates policy outcomes and alternatives.</li>
            <li><strong>Policy Process:</strong> Studies how policies are formulated and implemented.</li>
            <li><strong>Policy Advocacy and Governance:</strong> Examines the influence of interest groups and governance structures.</li>
          </ul>
        </ul>
      </Slide>

      <Slide>
        <h2>Many different ways to discuss public policy</h2>
        <ol>
          <li><strong>Intentions:</strong> the purposes of government action</li>
          <li><strong>Goals:</strong> the stated ends to be achieved</li>
          <li><strong>Plans or proposals:</strong> the means to achieve the goals</li>
          <li><strong>Programs:</strong> the authorized means for pursuing the goals</li>
          <li><strong>Decisions or choices:</strong> specific actions that are taken to set goals, develop plans, and implement programs</li>
        </ol>
      </Slide>

      <Slide>
        <h2>Policy Outputs and Outcomes</h2>
        <ol>
          <li><strong>Policy Outputs:</strong> the formal actions that governments take to pursue their goals</li>
          <li><strong>Policy Outcomes:</strong> the effects that result from policy outputs</li>
        </ol>
        <img src="images/outputs_outcomes.png" alt="What's the difference?" style={{ width: "30%" }} />
      </Slide>

      <Slide>
        <h2>The Basics</h2>
        <ul>
          <li><strong>Institutions:</strong> the rules, norms, and procedures that structure the behavior of individuals and organizations.</li>
          <li><strong>Government:</strong> the institutions and political processes through which public policy choices are made with legal authority to govern or rule a group of people.</li>
          <li><strong>Government Institutions:</strong> the US Constitution, Congress, the President, the Courts, the bureaucracy, and state and local governments.</li>
          <li><strong>Federalism:</strong> the division of power between the national government and state governments; the division of power and authority on a geographic basis.</li>
        </ul>
      </Slide>

      <Slide>
        <h2>The Context of Public Policy</h2>
        <h3>The Social Context</h3>
        <ul>
          <li><strong>Social Problems:</strong> conditions that are harmful to individuals or society and that require collective action to address.</li>
          <li><strong>Social Values:</strong> the beliefs that people hold about what is good, right, and desirable.</li>
          <li><strong>Social Norms:</strong> the unwritten rules that guide behavior in a society.</li>
          <li><strong>Social Changes:</strong> the transformations in society that affect the way people live and work.</li>
        </ul>
      </Slide>

      <Slide>
        <h2>Reasons for Government Involvement</h2>
        <ol>
          <li><strong>Political:</strong> shifts in public opinion; rise of social movements</li>
          <li><strong>Moral or Ethical:</strong> action is the “right” thing to do, even without public support</li>
          <li><strong>Economic:</strong> market failures; externalities; public goods</li>
        </ol>
        <img src="images/involvement.png" alt="Government Involvement" style={{ width: "50%" }} />
      </Slide>

      <Slide>
        <h2>The Practice of Policy Analysis</h2>
        <img src="images/analysis.png" alt="Policy Analysis" style={{ width: "50%" }} />
        <ul>
          <li><strong>Everyday Relevance:</strong> Policy analysis isn’t just for specialists; we all use it in daily decisions (e.g., buying a car, choosing a course).</li>
        </ul>
      </Slide>

      <Slide>
        <h2>That’s all for today!</h2>
        <ol>
          <li>Discussion 1 Post due on Tuesday</li>
          <li>Read Kraft & Furlong, Ch. 2 and Smith & Larimer, Ch. 3 for Next Week</li>
          <li>Sign up for Kritik</li>
          <li>Have a great long weekend!</li>
        </ol>
      </Slide>
    </Reveal>
  );
}

export default Slides;
