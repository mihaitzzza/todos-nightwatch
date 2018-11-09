require('nightwatch-cucumber')({
    // cucumberArgs: ['--require', 'features/step_definitions', 'features']
});

module.exports = {
    'output_folder': 'reports',
    'custom_commands_path': '',
    'custom_assertions_path': '',
    'page_objects_path': '',
    'globals_path': './globals.js',
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
            'username': 'cataursu',
            'access_key': '8da67c83-b4e3-4100-86a6-90cb68cd7f59',
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
                'name': 'Chrome job',
                'browserName': 'chrome',
                'platform': 'Linux',
                'version': '48'
            }
        },
        'safari': {
            'desiredCapabilities': {
                'name': 'Safari job',
                'platform': 'macOS 10.13',
                'browserName': 'safari',
                'version': '12'
            }
        }
    }
};
