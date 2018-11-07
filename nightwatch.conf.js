require('nightwatch-cucumber')({
    // cucumberArgs: ['--require', 'features/step_definitions', 'features']
});

module.exports = {
    'output_folder': 'reports',
    'custom_commands_path': '',
    'custom_assertions_path': '',
    'page_objects_path': '',
    'globals_path': '',
    'selenium': {
        'start_process': false,
        'server_path': '',
        'log_path': '',
        'port': 80,
        'cli_args': {
            'webdriver.chrome.driver': '',
            'webdriver.gecko.driver': '',
            'webdriver.edge.driver': ''
        }
    },
    'test_settings': {
        'default': {
            'launch_url': 'http://ondemand.saucelabs.com:80',
            'selenium_port': 80,
            'selenium_host': 'ondemand.saucelabs.com',
            'silent': true,
            'username': 'mihaitzzza',
            'access_key': '64ea029f-4801-4ced-ad58-930aa21ecdba',
            'screenshots': {
                'enabled': false,
                'path': ''
            },
            'globals': {
                'waitForConditionTimeout': 10000
            }
        },
        'chrome': {
            'desiredCapabilities': {
                'browserName': 'chrome',
                'platform': 'OS X 10.11',
                'version': '47'
            }
        },
        'firefox': {
            'desiredCapabilities': {
                'platform': 'Windows 8',
                'browserName': 'firefox',
                'version': '33'
            }
        }
    }
};
