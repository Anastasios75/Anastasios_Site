export function sketch5(p) {
  /* Ορισμός μεταβλητών εκτός των συναρτήσεων setup() και draw()
     για τον έλεγχο της περιστροφής των διαφορετικών σπιράλ */
  let angle = 0;

  p.setup = function() {
    // Δημιουργία canvas και ρύθμιση χρωματικού μοντέλου
    p.createCanvas(600, 600);
    p.colorMode(p.HSB, 255);
    p.background(0);
  };

  p.draw = function() {
    // Καθαρό μαύρο φόντο
    p.background(0);

    // Μετακίνηση στο κέντρο του canvas
    p.translate(p.width/2, p.height/2);

    /* Δημιουργία πολλαπλών σπειροειδών συνθέσεων
       - Τέσσερα σπιράλ με δεξιόστροφη περιστροφή
       - Τέσσερα σπιράλ με αριστερόστροφη περιστροφή
       - Διαφορετικά χρωματικά φάσματα */

    // Δεξιόστροφα σπιράλ
    // Πρώτο σπιράλ (πράσινο προς μπλε)
    drawSpiral(0, 85, 170, 1, 1);
    // Δεύτερο σπιράλ (μπλε προς μωβ)
    drawSpiral(p.PI/3, 170, 200, 0.8, 1);
    // Τρίτο σπιράλ (κίτρινο προς πορτοκαλί)
    drawSpiral(p.PI*2/3, 40, 85, 1.2, 1);
    // Τέταρτο σπιράλ (μωβ προς ροζ)
    drawSpiral(p.PI, 200, 235, 0.9, 1);

    // Αριστερόστροφα σπιράλ (αντίστροφη κατεύθυνση)
    // Πρώτο σπιράλ (πράσινο προς μπλε)
    drawSpiral(0, 85, 170, 1, -1);
    // Δεύτερο σπιράλ (μπλε προς μωβ)
    drawSpiral(p.PI/3, 170, 200, 0.8, -1);
    // Τρίτο σπιράλ (κίτρινο προς πορτοκαλί)
    drawSpiral(p.PI*2/3, 40, 85, 1.2, -1);
    // Τέταρτο σπιράλ (μωβ προς ροζ)
    drawSpiral(p.PI, 200, 235, 0.9, -1);

    // Αργή περιστροφή του συνολικού σχεδίου
    angle += 0.01;
  };

  /* Συνάρτηση σχεδίασης σπιράλ με παραμέτρους:
     - startAngle: αρχική γωνία
     - startHue: αρχικό χρώμα
     - endHue: τελικό χρώμα
     - speedMult: πολλαπλασιαστής ταχύτητας
     - direction: κατεύθυνση περιστροφής (1 ή -1) */
  function drawSpiral(startAngle, startHue, endHue, speedMult, direction) {
    let radius = 0;
    p.noStroke();

    for (let i = 0; i < 150; i+=0.1) {
      // Υπολογισμός θέσης με κατεύθυνση
      let currentAngle = (angle * speedMult + startAngle + i * 0.2) * direction;
      let x = p.cos(currentAngle) * radius;
      let y = p.sin(currentAngle) * radius;

      // Χρωματική μετάβαση
      let hue = p.map(i, 0, 150, startHue, endHue);
      p.fill(hue, 255, 255, 200);

      // Σχεδίαση κύκλου με μέγεθος που μειώνεται προς τα έξω
      let size = p.map(i, 0, 150, 5, 3);
      p.circle(x, y, size);

      // Σταδιακή αύξηση ακτίνας
      radius += 0.5;
    }
  }
}
