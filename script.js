document.getElementById('cardForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('firstName').value.trim();
  const designation = document.getElementById('designation').value.trim();
  const phone1 = document.getElementById('phone1').value.trim();
  const phone2 = document.getElementById('phone2').value.trim();
  const email = document.getElementById('email').value.trim();
  const company = document.getElementById('company').value.trim();
  const website = document.getElementById('website').value.trim();

  // Fill card content
  document.getElementById('cardName').innerText = name;
  document.getElementById('cardDesignation').innerText = designation;
  document.getElementById('cardPhone1').innerText = phone1;
  document.getElementById('cardPhone2').innerText = phone2;
  document.getElementById('cardEmail').innerText = email;
  document.getElementById('cardCompany').innerText = company;
  document.getElementById('cardWebsite').innerText = website;

  const qrData = `
Name: ${name}
Designation: ${designation}
Phone 1: ${phone1}
Phone 2: ${phone2}
Email: ${email}
Company: ${company}
Website: ${website}
`;

  // Generate QR
  const qrContainer = document.getElementById('qrcode');
  qrContainer.innerHTML = '';
  new QRCode(qrContainer, {
    text: qrData,
    width: 200,
    height: 200,
    correctLevel: QRCode.CorrectLevel.H
  });

  document.getElementById('businessCard').style.display = 'flex';
  document.getElementById('saveBtn').style.display = 'inline-block';
});

document.getElementById('saveBtn').addEventListener('click', function() {
  const card = document.getElementById('businessCard');
  html2canvas(card).then(canvas => {
    const link = document.createElement('a');
    link.download = 'Virtual_Business_Card.png';
    link.href = canvas.toDataURL();
    link.click();
  });
});
