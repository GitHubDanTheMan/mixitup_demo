            var containerEl = document.querySelector('.container');
            var checkboxGroup = document.querySelector('.checkbox-group');
            var checkboxes = checkboxGroup.querySelectorAll('input[type="checkbox"]');

            var mixer = mixitup(containerEl, {
              load: {
              filter: '.none'                //Start with nothing showing
             }
             });

            checkboxGroup.addEventListener('change', function() {
                var selectors = [];

                // Iterate through all checkboxes, pushing the
                // values of those that are checked into an array

                for (var i = 0; i < checkboxes.length; i++) {
                    var checkbox = checkboxes[i];

                    if (checkbox.checked) selectors.push(checkbox.value);
                }

                // If there are values in the array, join it into a string
                // using your desired logic, and send to the mixer's .filter()
                // method, otherwise filter by 'all'

                var selectorString = selectors.length > 0 ?
                    selectors.join(',') : // or '.' for AND logic
                    'none';

                mixer.filter(selectorString);
            });