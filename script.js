(function () {
  'use strict';

  const paper = (image, url, title, reference) => ({ image, url, title, reference });
  const topicPapers = {
    kinematics: paper('assets/topics/kinematics.jpg', 'https://doi.org/10.1007/s00205-016-1007-x', 'Neff, Eidel, and Martin, Geometry of Logarithmic Strain Measures in Solid Mechanics (2016)', 'r37'),
    balance: paper('assets/topics/balance.jpg', 'https://arxiv.org/abs/2211.12811', 'Bigoni et al., Configurational Forces on Elastic Structures (2022)'),
    stress: paper('assets/topics/stress.jpg', 'https://doi.org/10.1098/rspa.2015.0415', 'dell’Isola, Seppecher, and Della Corte, The Postulations à la d’Alembert and à la Cauchy for Higher-Gradient Continua (2015)'),
    thermo: paper('assets/topics/thermo.jpg', 'https://doi.org/10.1007/s10659-010-9298-x', 'Casey, Nonlinear Thermoelastic Materials with Viscosity and Internal Constraints: A Classical Continuum Thermodynamics Approach (2011)'),
    rve: paper('assets/topics/rve.jpg', 'https://arxiv.org/abs/2103.07627', 'Schneider, Josien, and Otto, Representative Volume Elements for Matrix–Inclusion Composites (2021)'),

    beams: paper('assets/topics/beams.jpg', 'https://doi.org/10.1007/s00161-014-0381-6', 'Awrejcewicz et al., Regular and Chaotic Oscillations of a Timoshenko Beam (2015)'),
    buckling: paper('assets/topics/buckling.jpg', 'https://ntrs.nasa.gov/citations/20040077039', 'Hilburger and Starnes, Shell Buckling Design Criteria Based on Manufacturing Imperfection Signatures (2004)'),
    dynamics: paper('assets/topics/dynamics.jpg', 'https://doi.org/10.1007/s00466-021-01989-4', 'Köcher et al., A Newmark Space–Time Formulation in Structural Dynamics (2021)'),
    waves: paper('assets/topics/waves.jpg', 'https://doi.org/10.1109/T-SU.1984.31456', 'Koshiba, Karakida, and Suzuki, Finite-Element Analysis of Lamb-Wave Scattering in an Elastic Plate Waveguide (1984)'),
    contact: paper('assets/topics/contact.jpg', 'https://erleben.github.io/pubs/2022/andrews.ea22/andrews.ea22.pdf', 'Andrews, Erleben, and Ferguson, Contact and Friction Simulation for Computer Graphics (2022)'),

    hyperelastic: paper('assets/topics/hyperelastic.jpg', 'https://doi.org/10.1007/s11071-022-07700-3', 'Alijani et al., A Review on the Nonlinear Dynamics of Hyperelastic Structures (2022)'),
    anisotropy: paper('assets/topics/anisotropy.jpg', 'https://arxiv.org/abs/1905.12761', 'Trageser and Seleson, Anisotropic 2D, Plane-Strain, and Plane-Stress Models in Elasticity (2019)'),
    thermoelasticity: paper('assets/topics/thermoelasticity.jpg', 'https://arxiv.org/abs/1311.3766', 'Kolesov, Vabishchevich, and Vasilyeva, Splitting Schemes for Poroelasticity and Thermoelasticity Problems (2013)'),
    poroelasticity: paper('assets/topics/poroelasticity.jpg', 'https://doi.org/10.3390/geosciences11050219', 'Selvadurai et al., On the Poroelastic Biot Coefficient for a Granitic Rock (2021)'),
    softactive: paper('assets/topics/softactive.jpg', 'https://arxiv.org/abs/1810.01054', 'Hu et al., ChainQueen: A Real-Time Differentiable Physical Simulator for Soft Robotics (2019)'),

    plasticity: paper('assets/topics/plasticity.jpg', 'https://doi.org/10.1088/0965-0393/3/5/008', 'Van der Giessen and Needleman, Discrete Dislocation Plasticity: A Simple Planar Model (1995)'),
    integration: paper('assets/milestones/simo-taylor.jpg', 'https://doi.org/10.1016/0045-7825(85)90070-2', 'Simo and Taylor, Consistent Tangent Operators for Rate-Independent Elastoplasticity (1985)'),
    gurson: paper('assets/topics/gurson.jpg', 'https://www.osti.gov/biblio/7351470', 'Gurson, Continuum Theory of Ductile Rupture by Void Nucleation and Growth (1975)'),
    creep: paper('assets/topics/creep.jpg', 'https://doi.org/10.3390/modelling5030043', 'Wu, Liu, and Khelfaoui, Creep Phenomena, Mechanisms, and Modeling of Complex Engineering Alloys (2024)'),
    internal: paper('assets/topics/internal.jpg', 'https://doi.org/10.1016/j.ijplas.2010.06.005', 'Horstemeyer and Bammann, Historical Review of Internal-State-Variable Theory for Inelasticity (2010)'),

    griffith: paper('assets/milestones/griffith.jpg', 'https://doi.org/10.1098/rsta.1921.0006', 'Griffith, The Phenomena of Rupture and Flow in Solids (1921)'),
    irwin: paper('assets/topics/irwin.jpg', 'https://ntrs.nasa.gov/citations/19700032589', 'Gross and Mendelson, Plane Elastostatic Analysis of V-Notched Plates (1970)'),
    rice: paper('assets/milestones/rice.jpg', 'https://doi.org/10.1115/1.3601206', 'Rice, A Path Independent Integral and the Approximate Analysis of Strain Concentration (1968)'),
    paris: paper('assets/topics/paris.jpg', 'https://ntrs.nasa.gov/citations/20100021172', 'Newman, Fatigue Crack Closure Analysis Using Digital Image Correlation (2010)'),
    damage: paper('assets/topics/damage.jpg', 'https://doi.org/10.5194/tc-8-2101-2014', 'Krug et al., Combining Damage and Fracture Mechanics to Model Calving (2014)'),
    phasefield: paper('assets/topics/phasefield.jpg', 'https://arxiv.org/abs/math/0103221', 'Chambolle, A Model for the Quasi-Static Growth of Brittle Fractures (2002)'),

    dislocations: paper('assets/topics/dislocations.jpg', 'https://doi.org/10.5194/se-2021-30', 'Mühlhaus et al., On the Formulation of a Crystal-Plasticity Model (2021)'),
    eshelby: paper('assets/topics/eshelby.jpg', 'https://arxiv.org/abs/1507.07165', 'Parnell, The Hill and Eshelby Tensors for Ellipsoidal Inhomogeneities (2015)'),
    hallpetch: paper('assets/topics/hallpetch.jpg', 'https://doi.org/10.1007/s10853-019-04160-w', 'Cordero et al., The Hall–Petch and Inverse Hall–Petch Relations (2020)'),
    composites: paper('assets/topics/composites.jpg', 'https://dml.cz/handle/10338.dmlcz/134357', 'Walpole, A Comparison of Homogenization, Hashin–Shtrikman Bounds, and Halpin–Tsai Equations (1997)'),
    metamaterials: paper('assets/topics/metamaterials.jpg', 'https://doi.org/10.1557/mrc.2015.51', 'Christensen et al., Vibrant Times for Mechanical Metamaterials (2015)'),

    fem: paper('assets/topics/fem.jpg', 'https://doi.org/10.1090/S0002-9904-1943-07818-4', 'Courant, Variational Methods for the Solution of Problems of Equilibrium and Vibrations (1943)'),
    nonlinear: paper('assets/topics/nonlinear.jpg', 'https://hdl.handle.net/10919/20113', 'Fujii et al., A Comparison of Algorithms for Tracing Nonlinear Equilibrium Paths (2002)'),
    locking: paper('assets/topics/locking.jpg', 'https://arxiv.org/abs/2111.00612', 'Karabelas et al., A Robust Finite-Element Framework for Nearly Incompressible Elasticity (2021)'),
    fe2: paper('assets/topics/fe2.jpg', 'https://journals.riverpublishers.com/index.php/EJCM/article/view/2777', 'Feyel and Chaboche, Multi-Scale Nonlinear FE² Analysis of Composite Structures (2001)'),
    datadriven: paper('assets/milestones/data-driven.jpg', 'https://arxiv.org/abs/1510.04232', 'Kirchdoerfer and Ortiz, Data-Driven Computational Mechanics (2016)'),

    dic: paper('assets/topics/dic.jpg', 'https://arxiv.org/abs/0712.2642', 'Roux et al., Three-Dimensional Image Correlation from X-Ray Computed Tomography (2008)'),
    inverse: paper('assets/topics/inverse.jpg', 'https://arxiv.org/abs/1907.02691', 'Mareš et al., Inverse Identification of Constitutive Parameters for Hyperelastic Materials (2019)'),
    validation: paper('assets/topics/validation.jpg', 'https://www.osti.gov/biblio/901974', 'Oberkampf and Trucano, Verification and Validation Benchmarks (2007)'),
    pce: paper('assets/topics/pce.jpg', 'https://doi.org/10.1051/m2an/2011045', 'Ernst et al., On the Convergence of Generalized Polynomial-Chaos Expansions (2012)'),
    bayesian: paper('assets/topics/bayesian.jpg', 'https://arxiv.org/abs/1803.01231', 'Xie and Xu, Bayesian Projected Calibration of Computer Models (2018)'),

    icme: paper('assets/topics/icme.jpg', 'https://doi.org/10.1557/mrs2006.174', 'Ceder et al., Toward Computational Materials Design (2006)'),
    additive: paper('assets/milestones/am-fatigue.jpg', 'https://arxiv.org/abs/2311.07046', 'Yi et al., A Holistic Review on Fatigue Properties of Additively Manufactured Metals (2023)'),
    integrity: paper('assets/topics/integrity.jpg', 'https://doi.org/10.32604/sdhm.2023.044573', 'Firoozi and Firoozi, Emerging Trends in Damage-Tolerance Assessment (2024)'),
    selection: paper('assets/topics/selection.jpg', 'https://doi.org/10.3390/su11195465', 'Branowski, Zabłocki, and Sydor, The Material Indices Method in Sustainable Engineering Design (2019)'),
    topology: paper('assets/topics/topology.jpg', 'https://arxiv.org/abs/1901.09336', 'Allaire et al., The Homogenization Method for Topology Optimization: Old and New (2019)')
  };

  const selections = {
    foundations: ['kinematics', 'balance', 'stress', 'thermo', 'rve'],
    structures: ['beams', 'buckling', 'dynamics', 'waves', 'contact'],
    elasticity: ['hyperelastic', 'anisotropy', 'thermoelasticity', 'poroelasticity', 'softactive'],
    inelasticity: ['plasticity', 'integration', 'gurson', 'creep', 'internal'],
    failure: ['griffith', 'irwin', 'rice', 'paris', 'damage', 'phasefield'],
    scales: ['dislocations', 'eshelby', 'hallpetch', 'composites', 'metamaterials'],
    computation: ['fem', 'nonlinear', 'locking', 'fe2', 'datadriven'],
    uncertainty: ['dic', 'inverse', 'validation', 'pce', 'bayesian'],
    design: ['icme', 'additive', 'integrity', 'selection', 'topology']
  };

  function showPaper(section, key) {
    const item = topicPapers[key];
    const figure = section.querySelector('figure');
    if (!item || !figure) return;
    const link = figure.querySelector('a');
    const image = figure.querySelector('img');
    const caption = figure.querySelector('figcaption');
    link.href = item.url;
    image.src = item.image;
    image.alt = 'First page of ' + item.title;
    caption.textContent = item.title + '. ';
    const source = document.createElement('a');
    source.href = item.url;
    source.textContent = 'Paper';
    caption.appendChild(source);
    if (item.reference) {
      caption.appendChild(document.createTextNode(' · '));
      const reference = document.createElement('a');
      reference.href = '#' + item.reference;
      reference.textContent = 'Bibliography [' + item.reference.slice(1) + ']';
      caption.appendChild(reference);
    }
  }

  Object.entries(selections).forEach(([sectionId, keys]) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    const entries = Array.from(section.querySelectorAll('.topics details'));
    if (entries.length !== keys.length) {
      console.error('Topic/paper count mismatch:', sectionId, entries.length, keys.length);
      return;
    }
    entries.forEach((entry, index) => {
      entry.addEventListener('toggle', function () {
        if (!entry.open) return;
        entries.forEach(other => { if (other !== entry) other.open = false; });
        showPaper(section, keys[index]);
      });
    });
    const initial = Math.max(0, entries.findIndex(entry => entry.open));
    showPaper(section, keys[initial]);
  });

  document.querySelectorAll('a[href^="#r"]').forEach(link => {
    link.addEventListener('click', function () {
      const target = document.getElementById(link.getAttribute('href').slice(1));
      if (target) target.classList.add('cited');
    });
  });
}());
