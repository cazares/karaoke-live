//
//  UserPostViewController.swift
//  UserPost
//
//  Created by Miguel Cazares on 1/21/18.
//  Copyright © 2018 Miguel Cazares. All rights reserved.
//

import UIKit

class KaraokeLiveViewController: BaseReactNativeViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        moduleName = "KaraokeLive"
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        
        setupReactView()
    }
}
