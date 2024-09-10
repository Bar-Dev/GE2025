document.addEventListener("DOMContentLoaded", function() {
    const areas = [
        { id: 'carlow-kilkenny-area', img: 'carlow-kilkenny-img', value: 'CK' },
        { id: 'cavan-monaghan-area', img: 'cavan-monaghan-img', value: 'CM' },
        { id: 'clare-area', img: 'clare-img', value: 'CL' },
        { id: 'cork-east-area', img: 'cork-east-img', value: 'CE' },
        { id: 'cork-north-central-area', img: 'cork-north-central-img', value: 'CNC' },
        { id: 'cork-north-west-area', img: 'cork-north-west-img', value: 'CNW' },
        { id: 'cork-south-central-area', img: 'cork-south-central-img', value: 'CSC' },
        { id: 'cork-south-west-area', img: 'cork-south-west-img', value: 'CSW' },
        { id: 'donegal-area', img: 'donegal-img', value: 'DO' },
        { id: 'dublin-outer-area', img: 'dublin-outer-img', value: 'DUO' },
        { id: 'dublin-bay-north-area', img: 'dublin-bay-north-area', value: 'DBN' },
        { id: 'dublin-fingal-west-area', img: 'dublin-fingal-west-area', value: 'DFW' },
        { id: 'dublin-fingal-east-area', img: 'dublin-fingal-east-area', value: 'DFE' },
        { id: 'dublin-west-area', img: 'dublin-west-area', value: 'DWA' },
        { id: 'dublin-mid-west-area', img: 'dublin-mid-west-area', value: 'DMW' },
        { id: 'dublin-south-west-area', img: 'dublin-south-west-area', value: 'DSW' },
        { id: 'dublin-rathdown-area', img: 'dublin-rathdown-area', value: 'DRD' },
        { id: 'dun-laoghaire-area', img: 'dun-laoghaire-area', value: 'DUL' },
        { id: 'dublin-north-west-area', img: 'dublin-north-west-area', value: 'DNW' },
        { id: 'dublin-central-area', img: 'dublin-central-area', value: 'DUC' },
        { id: 'dublin-south-central-area', img: 'dublin-south-central-area', value: 'DSC' },
        { id: 'dublin-bay-south-area', img: 'dublin-bay-south-area', value: 'DBS' },
        { id: 'galway-west-area', img: 'galway-west-img', value: 'GW' },
        { id: 'galway-east-area', img: 'galway-east-img', value: 'GE' },
        { id: 'kerry-area', img: 'kerry-img', value: 'KY' },
        { id: 'kildare-north-area', img: 'kildare-north-img', value: 'KN' },
        { id: 'kildare-south-area', img: 'kildare-south-img', value: 'KS' },
        { id: 'limerick-city-area', img: 'limerick-city-img', value: 'LCI' },
        { id: 'limerick-co-area', img: 'limerick-co-img', value: 'LCO' },
        { id: 'longford-westmeath-area', img: 'longford-westmeath-img', value: 'LW' },
        { id: 'louth-area', img: 'louth-img', value: 'LO' },
        { id: 'mayo-area', img: 'mayo-img', value: 'MO' },
        { id: 'meath-east-area', img: 'meath-east-img', value: 'ME' },
        { id: 'meath-west-area', img: 'meath-west-img', value: 'MW' },
        { id: 'offaly-area', img: 'offaly-img', value: 'OF' },
        { id: 'laois-area', img: 'laois-img', value: 'LA' },
        { id: 'roscommon-galway-area', img: 'roscommon-galway-img', value: 'RG' },
        { id: 'sligo-leitrim-area', img: 'sligo-leitrim-img', value: 'SL' },
        { id: 'tipperary-north-area', img: 'tipperary-north-img', value: 'TN' },
        { id: 'tipperary-south-area', img: 'tipperary-south-img', value: 'TS' },
        { id: 'waterford-area', img: 'waterford-img', value: 'WD' },
        { id: 'wexford-area', img: 'wexford-img', value: 'WX' },
        { id: 'wicklow-wexford-area', img: 'wicklow-wexford-img', value: 'WW' },
        { id: 'wicklow-area', img: 'wicklow-img', value: 'WI' }
    ];

    const dropdown = document.getElementById('area-dropdown');
    let activeImage = null;

    // Function to hide all images and remove 'active' class
    function hideAllImages() {
        document.querySelectorAll('.hover-area img').forEach(img => {
            img.classList.remove('active');
            img.style.opacity = '0';
        });
        activeImage = null;
    }

    // Function to show a specific image
    function showImage(imgElement) {
        if (activeImage) {
            activeImage.style.opacity = '0';
            activeImage.classList.remove('active');
        }
        imgElement.classList.add('active');
        imgElement.style.opacity = '1';
        activeImage = imgElement;
    }

    // Handle area hover and click
    areas.forEach(function(area) {
        const areaElement = document.getElementById(area.id);
        const imgElement = document.getElementById(area.img);

        // Hover to show image
        areaElement.addEventListener('mouseenter', function() {
            if (imgElement !== activeImage) {
                imgElement.style.opacity = '1';
            }
        });

        // Hide image when hover ends (unless it's the active image)
        areaElement.addEventListener('mouseleave', function() {
            if (imgElement !== activeImage) {
                imgElement.style.opacity = '0';
            }
        });

        // Click to make image stay and update dropdown
        areaElement.addEventListener('click', function(event) {
            event.preventDefault();
            showImage(imgElement);
            dropdown.value = area.value; // Update dropdown to reflect the clicked area
        });
    });

    // Handle dropdown changes
    dropdown.addEventListener('change', function() {
        const selectedValue = dropdown.value;
        const selectedArea = areas.find(area => area.value === selectedValue);
        if (selectedArea) {
            const imgElement = document.getElementById(selectedArea.img);
            showImage(imgElement);
        } else {
            hideAllImages(); // If no area is selected, hide all images
        }
    });
});

// Modal logic for Dublin Outer and other areas
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const closeModal = document.getElementsByClassName('close')[0];

    // Handle area click to show modal (for specific areas like Dublin Outer)
    document.querySelectorAll('area').forEach(area => {
        area.addEventListener('click', (e) => {
            e.preventDefault();
            if (area.id === 'dublin-outer-area') {
                modalImg.src = './assets/images/DublinRegion.png';
                modal.style.display = 'block';
            }
            // Add logic for other areas if needed
        });
    });

    // Handle modal close
    closeModal.onclick = () => {
        modal.style.display = 'none';
    };

    // Handle clicks outside the modal content to close the modal
    window.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    };
});

// Function to show sub-image on hover
function showSubImage(imageId) {
    const subImageContainer = document.getElementById('sub-image-container');
    const subImage = document.getElementById('sub-image');
    subImage.src = `./assets/images/${imageId}.png`;
    subImageContainer.style.display = "block";
}

// Function to hide sub-image when not hovering
function hideSubImage() {
    const subImageContainer = document.getElementById('sub-image-container');
    subImageContainer.style.display = "none";
}

